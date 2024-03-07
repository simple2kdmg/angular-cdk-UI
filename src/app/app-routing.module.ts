import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationPath } from 'src/models/shared/application-path.enum';

const routes: Routes = [
  {
      path: '',
      children: [
          {
              path: ApplicationPath.Default,
              loadChildren: () =>
                  import('../pages/default').then((m) => m.DefaultPageModule),
          },
          {
              path: ApplicationPath.Debug,
              loadChildren: () =>
                  import('../pages/debug').then((m) => m.DebugPageModule),
          },
          {
              path: '',
              redirectTo: `${ApplicationPath.Default}`,
              pathMatch: 'full',
          },
      ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
