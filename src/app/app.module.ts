import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { FrameworkPollComponent } from './framework-poll/framework-poll.component';

const config = {
  apiKey: '[INSERT YOUR FIREBASE SETTINGS HERE]',
  authDomain: '[INSERT YOUR FIREBASE SETTINGS HERE]',
  databaseURL: '[INSERT YOUR FIREBASE SETTINGS HERE]',
  projectId: '[INSERT YOUR FIREBASE SETTINGS HERE]',
  storageBucket: '[INSERT YOUR FIREBASE SETTINGS HERE]',
  messagingSenderId: '[INSERT YOUR FIREBASE SETTINGS HERE]'
};

@NgModule({
  declarations: [
    AppComponent,
    FrameworkPollComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [],
  entryComponents: [
    FrameworkPollComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(FrameworkPollComponent, {injector: this.injector});
    customElements.define('framework-poll', el);
  }

}
