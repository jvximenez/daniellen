import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';







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


  constructor(public photoViewer: PhotoViewer,private route: ActivatedRoute, private router: Router, private webview: WebView, private iab: InAppBrowser) {

    var storageRef = firebase.storage().ref("/Imagens");
    console.log('oi')


  // Now we get the references of these images
  let array = []
  storageRef.listAll().then(function(result) {

    result.items.forEach(function(imageRef) {
      // And finally display them
      displayImage(imageRef);
    });
    }).catch(function(error) {
      // Handle any errors
    });

    function displayImage(imageRef) {
      imageRef.getDownloadURL().then(function(url) {
        console.log(url,'aqui')
        array.push(url)
        console.log(this.urls)
        
        // TODO: Display the image on the UI
      }).catch(function(error) {
        // Handle any errors
      });
    }
   this.urls = array
    console.log(this.urls,array)
  }

  OpenFoto(item){
    console.log(item)
    this.iab.create(item)
  }


 

  



    
}

