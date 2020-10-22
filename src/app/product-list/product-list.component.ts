import { Component } from '@angular/core';
//angularfire
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
//  products = products;
//angularfire
  fproducts: Observable<any[]>;

//angularfire
  constructor(firestore: AngularFirestore) {
    this.fproducts = firestore.collection('fproducts').valueChanges({idField: 'id'});
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('you will be notified when the product goes on sale!');
  }


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
