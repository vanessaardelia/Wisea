import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommendation3',
  templateUrl: './recommendation3.page.html',
  styleUrls: ['./recommendation3.page.scss'],
})
export class Recommendation3Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  showInput(event, input){
    console.log(input);
    this.router.navigate(['/recommendation4']);
  }
}
