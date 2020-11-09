import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-recommendation-result',
  templateUrl: './recommendation-result.page.html',
  styleUrls: ['./recommendation-result.page.scss'],
})
export class RecommendationResultPage implements OnInit {
  arr: [];
  public b ='';
  p1; p2; p3; p4;
  budget: any;
  goWith: string;
  category: string;
  location: string;
  
  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.p1 = this.storage.get('budget');
    this.p2 = this.storage.get('goWith');
    this.p3 = this.storage.get('category');
    this.p4 = this.storage.get('location');

    Promise.all([this.p1,this.p2, this.p3, this.p4]).then(arr => {
      console.log(arr);

      // checking 
      if(arr[0] == null){
        console.log('a')
        this.router.navigate(['/recommendation1']);
      }
      else if(!arr[1])
        this.router.navigate(['/recommendation2']);
      else if(!arr[2])
        this.router.navigate(['/recommendation3']);
      else if(!arr[3])
        this.router.navigate(['/recommendation4']);

      
    });
  }

  tryAgain(){
    this.storage.clear();
    this.router.navigate(['/']);
  }
}
