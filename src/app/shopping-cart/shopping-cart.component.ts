import { Component, OnInit } from '@angular/core';
import { OfferClass } from 'src/types/offer';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: OfferClass[] = [];
  isShow: boolean = false;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingCart = this.shoppingCartService.products;
  }

  showCart() {
    this.isShow = !this.isShow;
  }
}
