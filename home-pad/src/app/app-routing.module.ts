import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OpeningsComponent } from './pages/openings/openings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'openings', component: OpeningsComponent },
  { path: 'openings/:name', component: OpeningsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
