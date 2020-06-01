import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  isAutenticated(): Observable<boolean> {
    return this.apiService.isAuthenticated();
  }

  logout(){}

}
