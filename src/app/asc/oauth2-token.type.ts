export class Oauth2Token {
  token_type: string;
  access_token: string;
  refresh_token: string;

  getTokenType() {
    return this.token_type;
  }
}
