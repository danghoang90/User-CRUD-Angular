import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../service/user.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {MessageService} from "../../../service/message.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  successList: any;
  key: any;
  successDelete: any;
  constructor(private userService: UserService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser() {
    this.userService.getAll().subscribe(res => {
      console.log(res)
      if (res.status === 'success'){
        this.users = res.data;
      }else {
        alert('data error')
      }

    })
  };

  deleteUser(id: any) {
    if (confirm('Are You Sure?') == true){
    this.userService.delete(id).subscribe(res => {
      if (res.status === 'success'){
          this.successDelete = 'Xoá Thành Công Người Dùng'
          this.getAllUser()
        }else {
        alert('data error')
      }
      })
    }
    };
  editUser(id: any) {
    this.router.navigate(['admin/users/edit/'+id]);
  }

  search() {
    if (this.key == "") {
      this.ngOnInit();
    }else {
      this.users = this.users.filter(res => {
        return res.name.toLocaleLowerCase().match(this.key.toLocaleLowerCase());
      })
    }
  }

}
