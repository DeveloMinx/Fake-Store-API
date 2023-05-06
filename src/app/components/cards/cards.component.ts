import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/Producto';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
@Input() producto!:Data
  constructor() { }

  ngOnInit(): void {
  }

}
