import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/core/model/userDTO';
import { ApiService } from 'src/app/core/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  public user = new UserDTO();

  constructor(private apiservice: ApiService, private location: Location) { }

  ngOnInit(): void {

  }

  save(): void {
    this.apiservice.registerUser(this.user).subscribe(data => {
      console.log('Registro do usuário realizado com sucesso!')
    }, error => {
      console.log('Erro ao criar o usuário', error);
    })
  }

  goback() {
    this.location.back();
  }
}
