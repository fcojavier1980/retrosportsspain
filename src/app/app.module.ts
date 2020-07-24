import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms'
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { FormsModule } from '@angular/forms';

/* Firebase */
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule , BUCKET } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { MenuComponent } from './components/menu/menu.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FooterComponent } from './components/pages/footer/footer.component';

/* --------- */



@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    MenuComponent,
    FooterComponent,

    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,  
    AngularFireAuthModule,        
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: BUCKET, useValue: 'retrosports-696b6.appspot.com' }
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
