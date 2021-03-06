import { ChatComponent } from './components/chat/chat.component';
import { AgregarAComponent } from './components/atracciones/agregar/agregar-a/agregar-a.component';
import { AgregardestComponent } from './components/destinos/agregardest/agregardest.component';
import { DashboardpanelComponent } from './components/dashboardpanel/dashboardpanel.component';
import { Routes, RouterModule } from '@angular/router';
import { RegistroService } from './services/registro.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CookieService } from 'ngx-cookie-service';
import { SpinnersAngularModule } from 'spinners-angular';
import { ForomainComponent } from './components/foro/foromain/foromain.component';
import { ForotopicComponent } from './components/foro/forotopic/forotopic.component';
import { ForocrudComponent } from './components/foro/forocrud/forocrud.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterabsoluteComponent } from './components/footer/footerabsolute/footerabsolute.component';
import { DatePipe } from '@angular/common';
import { TerminosComponent } from './components/terminos/terminos.component';





@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    IngresoComponent,
    NavbarComponent,
    DashboardComponent,
    DestinosComponent,
    ContactoComponent,
    DashboardpanelComponent,
    AgregardestComponent,
    AgregarAComponent,
    ForomainComponent,
    ForotopicComponent,
    ForocrudComponent,
    FooterComponent,
    FooterabsoluteComponent,
    ChatComponent,
    TerminosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    SpinnersAngularModule,


  ],
  providers: [HttpClient,
              CookieService,
              DatePipe
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
