import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainState } from './store/main.state';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([MainState])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
