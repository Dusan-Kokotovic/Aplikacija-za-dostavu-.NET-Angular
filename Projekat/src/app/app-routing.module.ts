import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './AdminKomponente/admin-home/admin-home.component';
import { DodavanjeProzivodaComponent } from './AdminKomponente/dodavanje-prozivoda/dodavanje-prozivoda.component';
import { SvePorudzbineComponent } from './AdminKomponente/sve-porudzbine/sve-porudzbine.component';
import { VerifikacijaComponent } from './AdminKomponente/verifikacija/verifikacija.component';
import { DostavljacHomeComponent } from './DostavljacKomponente/dostavljac-home/dostavljac-home.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { PotrosacHomeComponent } from './PotrosacKomponente/potrosac-home/potrosac-home.component';
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
  {path: 'verifikacija', component: VerifikacijaComponent},
  {path: 'dostavljachome', component: DostavljacHomeComponent},
  {path: 'potrosachome', component: PotrosacHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }