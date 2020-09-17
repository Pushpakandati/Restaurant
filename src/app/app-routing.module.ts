import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewComponent } from './component/review/review.component';
import { HomeComponent } from './component/home/home.component';
import { PhotosComponent } from './component/photos/photos.component';

const routes: Routes = [
  {path:'',   redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'review', component:ReviewComponent},
  {path:'photos', component:PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
