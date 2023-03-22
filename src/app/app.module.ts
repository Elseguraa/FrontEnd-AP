import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FotoMiaComponent } from './components/foto-mia/foto-mia.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { asapScheduler } from 'rxjs';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from 
    '@angular/platform-browser/animations';
import { interceptorProvider } from './service/interceptor-service';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HysComponent } from './components/hys/hys.component';
import { ContactoComponent } from './components/contacto/contacto.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FotoMiaComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    ProyectosComponent,
    EducacionComponent,
    HysComponent,
    ContactoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
