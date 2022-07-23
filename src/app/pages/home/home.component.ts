import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  constructor(public auth: AuthService, private _HttpClient:HttpClient) {}

  ngOnInit(): void {
    this.auth.getAccessTokenSilently().subscribe(token => {
      let httpHeaders = new HttpHeaders();
      httpHeaders.set("Authorization", "Bearer " + token);

      this._HttpClient.get("https://api.twitter.com/2/tweets/search/recent?query=saw", {

        headers: httpHeaders

      }).subscribe(res => {
        console.log(res);
      });
    });
  }
}
