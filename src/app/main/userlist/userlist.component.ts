import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  public userData:any;
  constructor(private userService: UserService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.userList().subscribe(data=> {
      this.userData=data;
   });
  }
  deleteUser(id:any){
    if(confirm("Are you sure to delete this item?"))
    {
      this.toastr.success('Record has been deleted succesfully!');
      this.userService.deleteUser(id).subscribe(data=> {
        this.userService.userList().subscribe(data=> {
          this.userData=data;
       });
     });
    }
  }

}
