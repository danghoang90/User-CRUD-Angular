import {Component, Input, OnInit} from '@angular/core';
import {RoleService} from "../../../service/role.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";
import {MessageService} from "../../../service/message.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  roles: any[] =[];
  formAddUser?: FormGroup;
  successAdd: any;
  constructor(private roleService: RoleService,
              private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllRole();
    this.formAddUser = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]],
      role: ['',Validators.required]
    })
  }

  getAllRole() {
    this.roleService.getAll().subscribe(res =>{
      console.log(res);
      this.roles = res;
    })
  }
  submit() {
    console.log(this.formAddUser?.value);
    let data = this.formAddUser?.value;
    this.userService.create(data).subscribe(res => {
      if (res.status === 'success') {
        this.messageService.setText('Thêm Người Dùng Thành Công')
        this.router.navigate(['admin/users']);
      }
    })
  }

  get email() {

    return this.formAddUser?.get('email')
  }
  get password() {
    // @ts-ignore
    return this.formAddUser?.get('password')
  }
  get name() {
    return this.formAddUser?.get('name')
  }
  get role() {
    return this.formAddUser?.get('role')
  }

}
