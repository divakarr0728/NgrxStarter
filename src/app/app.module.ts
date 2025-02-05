import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {HomeModule} from "./home/home.module";
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './Material.module';
import { AppRoutingModule } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOMERReducer } from './Store/Users/reducer';
import { AppEffects } from './Store/Common/effects';
import { CustomerEffects } from './Store/Users/effects';
import { UserlistingModule } from './userlisting/userlisting.module';
import { UserEditModule } from './user-edit/user-edit.module';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({customer:CUSTOMERReducer}),
    EffectsModule.forRoot([AppEffects,CustomerEffects]),
    HomeModule,
    UserlistingModule,
    UserEditModule
  ],
  declarations: [
    AppComponent,
    // UserlistingComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
