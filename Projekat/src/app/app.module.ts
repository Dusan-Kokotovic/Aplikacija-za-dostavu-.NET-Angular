import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { AdminHomeComponent } from './AdminKomponente/admin-home/admin-home.component';
import { DodavanjeProzivodaComponent } from './AdminKomponente/dodavanje-prozivoda/dodavanje-prozivoda.component';
import { SvePorudzbineComponent } from './AdminKomponente/sve-porudzbine/sve-porudzbine.component';
import { VerifikacijaComponent } from './AdminKomponente/verifikacija/verifikacija.component';
import { DostavljacHomeComponent } from './DostavljacKomponente/dostavljac-home/dostavljac-home.component';
import { MojePorudzbineComponent } from './DostavljacKomponente/moje-porudzbine/moje-porudzbine.component';
import { PotrosacHomeComponent } from './PotrosacKomponente/potrosac-home/potrosac-home.component';
import { PrethodnePorudzbineComponent } from './PotrosacKomponente/prethodne-porudzbine/prethodne-porudzbine.component';
import { AdminNavbarComponent } from './AdminKomponente/admin-navbar/admin-navbar.component';
import { PotrosacNavbarComponent } from './PotrosacKomponente/potrosac-navbar/potrosac-navbar.component';
import { DostavljacNavbarComponent } from './DostavljacKomponente/dostavljac-navbar/dostavljac-navbar.component';
import { NoveDostavaComponent } from './DostavljacKomponente/nove-dostava/nove-dostava.component';
import { NovaNarudzbinaComponent } from './PotrosacKomponente/nova-narudzbina/nova-narudzbina.component';
import { BrojcanikComponent } from './brojcanik/brojcanik.component';
import { JeloService } from './Services/jelo.service';
import { KorisnikService } from './Services/korisnik.service';
import { PorudzbinaService } from './Services/porudzbina.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TrenutnaPorudzbinaComponent } from './DostavljacKomponente/trenutna-porudzbina/trenutna-porudzbina.component';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    PasswordComponent,
    AdminHomeComponent,
    DodavanjeProzivodaComponent,
    SvePorudzbineComponent,
    VerifikacijaComponent,
    DostavljacHomeComponent,
    MojePorudzbineComponent,
    PotrosacHomeComponent,
    PrethodnePorudzbineComponent,
    AdminNavbarComponent,
    PotrosacNavbarComponent,
    DostavljacNavbarComponent,
    NoveDostavaComponent,
    NovaNarudzbinaComponent,
    BrojcanikComponent,
    TrenutnaPorudzbinaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    JeloService,
    KorisnikService,
    PorudzbinaService,{
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
