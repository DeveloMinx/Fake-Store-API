import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/Producto';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  data: Data[] | undefined;

  constructor(
    private apiServices: ApiService
  ) { }

  ngOnInit(): void {
    this.llenar_data();
  }

  llenar_data() {
    this.apiServices.getData().subscribe(data => {
      this.data = data;
      // Configura la cookie SameSite=None y Secure
      document.cookie = 'cookie_name=cookie_value;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;domain=example.com;secure;samesite=none';
    });
  }

}