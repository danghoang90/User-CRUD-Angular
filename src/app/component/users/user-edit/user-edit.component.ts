import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ParamMap} from "@angular/router";
import {RoleService} from "../../../service/role.service";
import {error} from "@angular/compiler/src/util";
import {MessageService} from "../../../service/message.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  editForm?: FormGroup | undefined;
  id?: number;
  roles: any[] =[];
  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private roleService: RoleService,
              private router: Router,
              private messageService: MessageService) {

    }

    ngOnInit(): void {
      this.getAllRole();
      this.editForm = this.fb.group({
        name: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required]],
        role: ['',Validators.required]
      })
      this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        // @ts-ignore
        this.id = +paramMap.get('id');
        // @ts-ignore
        this.getUser(this.id);

      })
    }

  getUser(id: number) {
    return this.userService.findById(id).subscribe(res => {
      console.log(res)
      // @ts-ignore
      this.editForm = new FormGroup({
        name: new FormControl(res.data?.name),
        email: new FormControl(res.data?.email),
        role: new FormControl(res.data?.role),
      });
    });
  }
  getAllRole() {
    this.roleService.getAll().subscribe(res =>{
      console.log(res);
      this.roles = res;
    })
  }

  updateUser(id: any) {
    const user = this.editForm?.value;
    this.userService.updateUser(id, user).subscribe(res => {
      console.log(res)
      this.messageService.setText('Cập Nhật Thành Công');
      this.router.navigate(['admin/users']);

    })
  }


  get email() {

    return this.editForm?.get('email')
  }
  get name() {
    return this.editForm?.get('name')
  }
  get role() {
    return this.editForm?.get('role')
  }

  }
