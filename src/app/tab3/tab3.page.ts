import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireModule } from '@angular/fire';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']

  
})

export class Tab3Page {
  fotosRef: any
  fotosList: any
  imageRef
  teste
  url
  num = 1
  urls = []


  constructor() {

    let i = 1
    let array = [] 
    while (i <= 6){

      this.fotosRef = firebase.storage().ref('/Imagens/'+i+'.jpg').getDownloadURL().then(function(url) {
        // `url` is the download URL for 'images/stars.jpg'
      
        // This can be downloaded directly:
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function(event) {
          var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
        array.push(url)
      })
      i+=1
    }

    this.urls = array
    console.log(this.urls)



    console.log('imageRef', this.fotosRef, this.url,array)


    this.teste = "https://firebasestorage.googleapis.com/v0/b/ionic3-gastos-45fd4.appspot.com/o/Imagens%2F1.jpg?alt=media&token=a12466ba-469c-4d3d-a94f-61cddedd899e"
  
    console.log(this.imageRef)
    console.log(this.fotosRef)
    console.log(this.fotosList)

  }


  
}

