import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommendation2',
  templateUrl: './recommendation2.page.html',
  styleUrls: ['./recommendation2.page.scss'],
})
export class Recommendation2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  withInput(event, withInput){
    console.log(withInput);
    this.router.navigate(['/recommendation3']);
  }
}
