import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommendation1',
  templateUrl: './recommendation1.page.html',
  styleUrls: ['./recommendation1.page.scss'],
})
export class Recommendation1Page implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  budgetInput(event, budget){
    console.log(budget);
    this.router.navigate(['/recommendation2']);
  }
}
