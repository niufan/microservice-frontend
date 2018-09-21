import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AnimationMetadata, AnimationStyleMetadata, animate, keyframes, state,
  sequence, style, transition, trigger } from '@angular/animations';

import { Oauth2Service } from '../oauth2.service';
import { Oauth2Token } from '../oauth2-token.type';


const bgs: string[] = [
  '/src/assets/bg/bg0.jpg',
  '/src/assets/bg/bg1.jpg',
  '/src/assets/bg/bg2.jpg',
  '/src/assets/bg/bg3.jpg',
  '/src/assets/bg/bg4.jpg',
  '/src/assets/bg/bg5.jpg'
], definitions: AnimationMetadata[] = [];
for (let i = 0, size = bgs.length; i < size; i++) {
  definitions.push(
    state(`${i}`, style({
      background: `transparent url("${bgs[i]}") repeat`,
      backgroundSize: '100%'
    }))
  );
  definitions.push(transition(`${(i + size - 1) % size} => ${i}`, [
    animate('3s ease-out')
  ]));
  definitions.push(transition(`${i} => ${(i + 1) % size}`, [
    animate('3s ease-in')
  ]));
}
definitions.push(transition('void => *', [
  animate('3s ease-in')
]));
definitions.push(transition(`* => void`, [
  animate('3s ease-out')
]));

@Component({
  selector: 'app-asc-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  animations: [trigger('back', definitions)]
})
export class AuthenticationComponent implements OnInit {

  back = -1;

  options: FormGroup;
  token: Oauth2Token;

  authentication = {
    username: '',
    password: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    formBuilder: FormBuilder,
    private oauth2Service: Oauth2Service
  ) {
    this.options = formBuilder.group({
      'username': formBuilder.control({
        required: true
      }),
      'password': formBuilder.control({
        required: true
      })
    });
  }

  ngOnInit() {
    this.back = (this.back + 1) % bgs.length;
    setInterval(() => {
      this.back = (this.back + 1) % bgs.length;
    }, 5000);
  }

  login() {
    this.oauth2Service.login(this.authentication.username, this.authentication.password)
      .subscribe((token: Oauth2Token) => {this.token = token;
        console.log(this.token);
        this.router.navigate(['/asc']);
      });
  }
}
