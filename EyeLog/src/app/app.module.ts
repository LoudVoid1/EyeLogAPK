import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"baseappk","appId":"1:546200714323:web:71cbf84427bd88f5419aa6","storageBucket":"baseappk.appspot.com","apiKey":"AIzaSyB9-542_1EVqD4Z6wtdZOY5LD1VIGHAgKU","authDomain":"baseappk.firebaseapp.com","messagingSenderId":"546200714323","measurementId":"G-9LRY8QE30H"})), provideAuth(() => getAuth())],
  bootstrap: [AppComponent],
})
export class AppModule {}
