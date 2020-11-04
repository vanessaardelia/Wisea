import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommendation4',
  templateUrl: './recommendation4.page.html',
  styleUrls: ['./recommendation4.page.scss'],
})
export class Recommendation4Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    maps(event, city){
      console.log(city);
      this.router.navigate(['recommendation-result'])
    }
}
