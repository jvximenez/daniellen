import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {
  restaurantesRef:any
  restaurantesList :any
  restaurante: any

  constructor() { 
    this.restaurantesRef = firebase.database().ref('/restaures').orderByChild('total')
    
    this.restaurantesRef.on('value', restaurantesList =>{
      let restaurantes = [];
      restaurantesList.forEach(restaurante => {
        var obj
        obj = restaurante.val()
        console.log(obj['cia']),
        (obj['cia'].forEach(element => {if (element == 'Daniela'){
          obj.key = restaurante.key
          restaurantes.push(obj)
        }
      }))

        return false;
        
      });
      restaurantes = restaurantes.reverse()

      this.restaurantesList = restaurantes
      console.log(this.restaurantesList)
    })
  
  }

  ngOnInit() {
  }

}
