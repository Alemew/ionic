import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'clasificacion',
    loadChildren: () => import('./clasificacion/clasificacion.module').then( m => m.ClasificacionPageModule)
  },
  {
    path: 'partido',
    loadChildren: () => import('./partido/partido.module').then( m => m.PartidoPageModule)
  },
  {
    path: 'jornada',
    loadChildren: () => import('./jornada/jornada.module').then( m => m.JornadaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }