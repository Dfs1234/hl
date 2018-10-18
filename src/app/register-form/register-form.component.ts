import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  Register(e){
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    var first_name = e.target.elements[2].value;
    var last_name = e.target.elements[3].value;
    var email = e.target.elements[4].value;
    var register = "unsucceed register";
    if(username !== null || password ! == null || first_name !== null || last_name !== null || email !== null)
      register = "succeed register";
    return register;
  }

}
