import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TestRequestModule } from 'src/module/test-request/test-request.module';

@NgModule({
  // ** Import Components
  declarations: [AppComponent, HeaderComponent],
  // ** Import Module
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TestRequestModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
