import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
  


})

  
export class Tab2Page {
  comprasRef: any
  comprasList: any
  compra: any


  constructor() {
    this.comprasRef = firebase.database().ref('/compras').orderByChild("total")

  

  this.comprasRef.on('value', comprasList => {
      
    let compras = [];
    let somadiv = 0
    comprasList.forEach( compra => { 
      var obj
      obj = compra.val()
      if (obj.categoria == 'Divida - Daniela'){
        obj.key = compra.key
        somadiv += Number(obj.payload)
        obj.soma = somadiv
        compras.push(obj);
      }
      
      return false;
    });
    compras = compras.reverse()

    this.comprasList = compras;
    console.log(this.comprasList)
  });



  }

}
