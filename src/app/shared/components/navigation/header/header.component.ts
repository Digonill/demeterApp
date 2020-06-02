import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  isAutenticated(): Observable<boolean> {
    return this.apiService.isAuthenticated();
  }

  logout() {
    this.apiService.logout().subscribe(() => {
      this.clearLocalStore();
      this.router.navigate(['login']);
    }, error => {
      console.log(' Erro ao realizar logout! ', error);
    })
  }

  clearLocalStore() { 
    localStorage.clear();
  }
}
