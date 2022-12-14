import { Component, OnInit, Input } from '@angular/core';
import { OfferClass } from 'src/types/offer';
import { OfferDetailsService } from '../services/offer-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css'],
})
export class OfferDetailsComponent implements OnInit {
  public offer: OfferClass;
  isClicked: boolean = false;

  constructor(private details: OfferDetailsService, private router: Router) {
    this.offer = details.getOffer();
  }

  ngOnInit(): void {}

  showDetails() {
    this.isClicked = !this.isClicked;
  }
  back() {
    this.router.navigate(['']);
  }
}
