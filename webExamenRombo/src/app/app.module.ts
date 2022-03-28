import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProspectoListComponent } from './component/prospecto-list/prospecto-list.component';
import { ProspectoFormComponent } from './component/prospecto-form/prospecto-form.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { ProspectoService } from './service/prospecto.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProspectoListComponent,
    ProspectoFormComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProspectoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
