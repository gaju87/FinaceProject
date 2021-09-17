import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  u={
    username: "",
    password: "",
  };

  login() {
    console.log("login called");
    console.log(this.u.username,this.u.password);

    if (this.u.username === 're' && this.u.password === 're') 
    {
      this.router.navigateByUrl("re-layout");
    }

    if (this.u.username === 'oe' && this.u.password === 'oe') 
    {
      this.router.navigateByUrl("oe-layout");
    }

  }

}
