import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.page.html',
  styleUrls: ['./payment-summary.page.scss'],
})
export class PaymentSummaryPage implements OnInit {
  paymentId: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {}

  goToSummary() {
    this.paymentId = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`./history-detail/${this.paymentId}`]);
  }

}
