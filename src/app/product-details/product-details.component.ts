import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//angularfire
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  // product;
//angularfire
  // private fproductDoc: AngularFirestoreDocument<any>;
  fproductDoc: AngularFirestoreDocument<any>;
  // fproduct: Observable<any>;
  fproduct;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
//angularfire
    afs: AngularFirestore
  ) { 

    this.route.params.subscribe(params => {
      // this.product = products[params['productId']];
//angularfire
      console.log(`fproducts/${params['productId']}`);
      this.fproductDoc = afs.doc(`fproducts/${params['productId']}`);
      // this.fproduct = this.fproductDoc.valueChanges();      
      this.fproductDoc.valueChanges().subscribe(res => {
        this.fproduct = res;
      });
    console.log(this.fproduct);
    });
  }

  ngOnInit() {
  /****
    this.route.params.subscribe(params => {
      this.product = products[params['productId']];
//angularfire
      this.fproductDoc = afs.doc(`fproducts/$(params)`);
      this.fproduct = this.fproductDoc.valueChanges();      
    });
  ****/
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart');
  }

}
