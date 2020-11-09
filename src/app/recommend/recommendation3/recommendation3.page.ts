import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-recommendation3',
  templateUrl: './recommendation3.page.html',
  styleUrls: ['./recommendation3.page.scss'],
})
export class Recommendation3Page implements OnInit {

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.storage.get('goWith').then((val) => {
      if(!val)
        this.router.navigate(['/recommendation2']);
    });
  }

  
  showInput(event, category){
    console.log(category);
    this.storage.set('category', category);
    this.router.navigate(['/recommendation4']);
  }
}
