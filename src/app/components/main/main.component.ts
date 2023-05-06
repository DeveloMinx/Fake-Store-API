import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/Producto';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    data:Data[ ]|undefined;

  constructor(private apiServises:ApiService) { }

  ngOnInit(): void {
    this.llenar_data();
  }

  llenar_data(){
    this.apiServises.getData().subscribe(data=> {
      this.data = data;
      console.table(this.data)
    })
  }

  
}
