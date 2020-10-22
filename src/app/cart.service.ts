import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//angularfire
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class CartService {

  items = [];
//angularfire
  fshipping: Observable<any[]>;
  afs: AngularFirestore;

  constructor(
    private http: HttpClient,
//angularfire
    firestore: AngularFirestore
  ) { 
    this.fshipping = firestore.collection('fshipping').valueChanges();
    this.afs = firestore;
  }

  addToCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
//angularfire
    // return this.http.get('/assets/shipping.json');
    return this.fshipping;
  }

//angularfire
  placeOrder(customerData) {
    const orderColl = this.afs.collection<any>('forders');
//    const orderColl = this.firestore.collection<any>('forders');
    orderColl.add({
      name: customerData.name, 
      address: customerData.address
    });
  }

}
