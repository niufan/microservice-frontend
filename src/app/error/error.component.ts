import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-error',
  template: `<div>{{ status }}</div>`,
  styles: []
})
export class ErrorComponent {

  status: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log('error');
    this.route.paramMap.pipe(
      switchMap(paramMap => paramMap.get('status'))
    ).subscribe(status => {
      this.status = status;
      console.log('error');
      console.log(this.status);
    });
  }
}
