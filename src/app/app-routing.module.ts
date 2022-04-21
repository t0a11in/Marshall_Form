import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '',
redirectTo: 'oci/gestion',
pathMatch: 'full'}

];


@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
})],
],
  exports: [RouterModule]
})


export class AppRoutingModule { }
