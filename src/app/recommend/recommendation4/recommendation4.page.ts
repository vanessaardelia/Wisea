import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-recommendation4',
  templateUrl: './recommendation4.page.html',
  styleUrls: ['./recommendation4.page.scss'],
})
export class Recommendation4Page implements OnInit {

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.storage.get('category').then((val) => {
      if(!val)
        this.router.navigate(['/recommendation3']);
    });
  }

    maps(event, location){
      console.log(location);
      this.storage.set('location', location);
      this.router.navigate(['recommendation-result'])
    }
}
