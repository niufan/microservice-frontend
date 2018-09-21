import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Oauth2Token } from './oauth2-token.type';

import { CacheService } from '../common/cache.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Basic dGVzdDoxMjM0NTY=',
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable()
export class Oauth2Service {

  constructor(private httpClient: HttpClient, private cacheService: CacheService) {
  }

  login(username: string, password: string, scope: string | undefined = 'web'
        , grant_type: string | undefined = 'password'): Observable<Oauth2Token> {
    console.log(username, password);
    const form = new URLSearchParams();
    form.set('username', username);
    form.set('password', password);
    form.set('scope', scope);
    form.set('grant_type', grant_type);
    return this.httpClient.post<Oauth2Token>('/api/asc/oauth/token', form.toString(), {
      withCredentials: true,
      headers: new HttpHeaders()
        .set('Authorization', 'Basic dGVzdDoxMjM0NTY=')
        .set('Content-Type', 'application/x-www-form-urlencoded') // application/x-www-form-urlencoded
    }).pipe(
      tap(token => {
        const authorization = token.token_type.substring(0, 1).toUpperCase() + token.token_type.substring(1).toLowerCase()
          + ' ' + token.access_token;
        this.cacheService.set('Authorization', authorization);
      }, token => {}, () => {
      }),
      catchError(this.handleError<any>('login'))
    );
  }

  refreshToken(refresh_token: string, grant_type: string | undefined = 'refresh_token') {
    return this.httpClient.post('/oauth/token', {
      refresh_token: refresh_token,
      grant_type: grant_type
    });
  }

  private serialize(data: object, contentType: ContentType = ContentType.APPLICATION_JSON) {
    let result: string;
    switch (contentType) {
      case ContentType.APPLICATION_JSON: {
        result = JSON.stringify(data);
        break;
      }
      case ContentType.APPLICATION_FORM_URLENCODED: {
        result = '';
        let i = 0;
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            if (i > 0) {
              result += '&';
            }
            result += `${key}=${data[key]}`;
            i++;
          }
        }
        break;
      }
    }
    return result;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}

enum ContentType {
  APPLICATION_JSON = 'application/json',
  APPLICATION_FORM_URLENCODED = 'application/x-www-form-urlencoded'
}
