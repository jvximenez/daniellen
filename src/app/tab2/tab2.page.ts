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
  last:any


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
    console.log(this.comprasList.length-1, this.comprasList)
  });

  



  }


  Arredondar(valor,casas){
    let cas = 10**casas
    let val = Math.round(valor*cas)/cas
    return val
  }

  TotalToDate(total){
    let ano = total.substr(0,4)
    let mes = total.substr(4,2)
    let dia = total.substr(6,2)
    return (dia+'/'+mes )
  }

}
