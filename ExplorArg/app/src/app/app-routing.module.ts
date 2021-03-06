import { TerminosComponent } from './components/terminos/terminos.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AtraccionesComponent } from './components/atracciones/atracciones.component';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { AgregardestComponent} from './components/destinos/agregardest/agregardest.component'
import { ForomainComponent } from './components/foro/foromain/foromain.component';
import { ForocrudComponent } from './components/foro/forocrud/forocrud.component';
import { ForotopicComponent } from './components/foro/forotopic/forotopic.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
{ path: '', component: InicioComponent },
{ path: 'dashboard' , canActivate: [AuthGuardService], component: DashboardComponent}, // , canActivate: [AuthGuardService]
{ path: 'registro', component: RegistroComponent},
{ path: 'ingreso', component: IngresoComponent},
{ path: 'destinos', component: DestinosComponent},
{ path: 'atracciones', component: AtraccionesComponent},
{ path: 'agregardest', component: AgregardestComponent},
{ path: 'foro', canActivate: [AuthGuardService], component: ForomainComponent},
{ path: 'agregarTema', component: ForocrudComponent},
{ path: 'foroTopic', component: ForotopicComponent},
{ path: 'contacto', component: ChatComponent},
{ path: 'terminos', component: TerminosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
