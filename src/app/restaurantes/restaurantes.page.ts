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
    this.restaurantesRef = firebase.database().ref('/restaurantes').limitToFirst(100).orderByChild('total')
    
    this.restaurantesRef.on('value', restaurantesList =>{
      let restaurantes = [];
      restaurantesList.forEach(restaurante => {
        console.log('entrou')
        var obj
        obj = restaurante.val()
        if(obj['cia'].includes('Daniela')){
          obj.key = restaurante.key
          restaurantes.push(obj)
        }

        return false;
        
      });
      restaurantes = restaurantes.reverse()

      this.restaurantesList = restaurantes
      console.log('oi', this.restaurantesList)
    })
  
  }

  ngOnInit() {
  }


  ShowDetalhes(rest){
    console.log(rest)
  }

}
