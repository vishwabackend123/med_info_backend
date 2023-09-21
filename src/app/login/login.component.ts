import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }
  onClickSubmit(){
    this.userService.userLogin(this.model).subscribe(data=> {
      localStorage.setItem('userData', JSON.stringify(data));
      this.router.navigate(['/dashboard']);
   });
  }

}
