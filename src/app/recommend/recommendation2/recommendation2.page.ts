import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-recommendation2',
  templateUrl: './recommendation2.page.html',
  styleUrls: ['./recommendation2.page.scss'],
})
export class Recommendation2Page implements OnInit {

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.storage.get('budget').then((val) => {
      if(!val)
        this.router.navigate(['/recommendation1']);
    });
  }

  withInput(event, goWith){
    console.log(goWith);
    this.storage.set('goWith', goWith);
    this.router.navigate(['/recommendation3']);
  }
}
