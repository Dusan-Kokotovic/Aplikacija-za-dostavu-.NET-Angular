import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './AdminKomponente/admin-home/admin-home.component';
import { DodavanjeProzivodaComponent } from './AdminKomponente/dodavanje-prozivoda/dodavanje-prozivoda.component';
import { SvePorudzbineComponent } from './AdminKomponente/sve-porudzbine/sve-porudzbine.component';
import { VerifikacijaComponent } from './AdminKomponente/verifikacija/verifikacija.component';
import { BrojcanikComponent } from './brojcanik/brojcanik.component';
import { DostavljacHomeComponent } from './DostavljacKomponente/dostavljac-home/dostavljac-home.component';
import { MojePorudzbineComponent } from './DostavljacKomponente/moje-porudzbine/moje-porudzbine.component';
import { NoveDostavaComponent } from './DostavljacKomponente/nove-dostava/nove-dostava.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { NovaNarudzbinaComponent } from './PotrosacKomponente/nova-narudzbina/nova-narudzbina.component';
import { PotrosacHomeComponent } from './PotrosacKomponente/potrosac-home/potrosac-home.component';
import { PrethodnePorudzbineComponent } from './PotrosacKomponente/prethodne-porudzbine/prethodne-porudzbine.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'password', component: PasswordComponent},
  {path: 'adminhome', component: AdminHomeComponent},
  {path: 'dodavanje', component: DodavanjeProzivodaComponent},
  {path: 'svenarudzbine', component: SvePorudzbineComponent},
  {path: 'predhodne', component: PrethodnePorudzbineComponent},
  {path: 'verifikacija', component: VerifikacijaComponent},
  {path: 'dostavljachome', component: DostavljacHomeComponent},
  {path: 'moje', component: MojePorudzbineComponent},
  {path: 'novedostava', component: NoveDostavaComponent},
  {path: 'potrosachome', component: PotrosacHomeComponent},
  {path: 'nova', component: NovaNarudzbinaComponent},
  {path: 'brojacanik', component: BrojcanikComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }