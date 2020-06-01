import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/core/model/login';
import { ApiService } from 'src/app/core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  user = new UserLogin();
  submitted: boolean = false;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    console.log('LoginUserComponent : Init() ')
  }

  public login() {
    this.submitted = true;
    localStorage.clear();

    this.apiService.login(this.user).subscribe(data => {
      this.loginSuccess(data);
    }, error => {
      console.log('Erro ao fazer Login!')
    })
  }

  public loginSuccess(data: any) {
    this.submitted = false;

    localStorage.setItem('accessToken', data.access_token);
    localStorage.setItem('refreshToken', data.refresh_token);

    this.apiService.getMainUser(localStorage.getItem('accessToken')).subscribe(user => {
      this.redirectPage(user)
    }, error => {
      console.log('Erro ao obter o usuário logado');
    })
  }

  public redirectPage(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.router.navigate(['welcome']);
  }
}
