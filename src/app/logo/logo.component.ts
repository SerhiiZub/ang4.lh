import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  logoUrl: string = '../../assets/img/logo.png';
  constructor() { }

  ngOnInit() {
  }

}
