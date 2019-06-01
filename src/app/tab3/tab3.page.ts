import { Component } from '@angular/core';
import  * as firebase  from 'firebase/app';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  countryRef: any
  countryList: any
  country

  constructor() {4
    this.countryRef = firebase.database().ref('/compras').limitToLast(100).orderByChild("total")

  

    this.countryRef.on('value', countryList => {
        
      let countries = [];
      countryList.forEach( country => { 
        var obj
        obj = country.val()
        obj.key = country.key
        countries.push(obj);
        
        return false;
      });
      countries = countries.reverse()
  
      this.countryList = countries;
      console.log(this.countryList)
    });
  
  }

}
