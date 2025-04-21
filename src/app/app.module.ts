import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { ProductComponent } from './components/product/product/product.component';
import { BannerComponent } from './components/product/banner/banner.component';
import { BodyComponent } from './components/product/body/body.component';
import { ProductRecommendationComponent } from './components/product/product-recommendation/product-recommendation.component';
import { ProductAccessoriesComponent } from './components/product/product-accessories/product-accessories.component';
import { TechNewsComponent } from './components/product/tech-news/tech-news.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { ButtonComponent } from './shared/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    BannerComponent,
    BodyComponent,
    ProductRecommendationComponent,
    ProductAccessoriesComponent,
    TechNewsComponent,
    FooterComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
