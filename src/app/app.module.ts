import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LayoutModule } from './modules/layout/layout.module';
import { productReducer } from './state/products/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './state/products/products.effects';
import { ProductsService } from './modules/products/services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    StoreModule.forRoot({products:productReducer}),
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([ ProductsEffects ])
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
