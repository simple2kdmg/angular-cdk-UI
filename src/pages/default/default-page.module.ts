import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DefaultPageComponent } from './default-page.component';
import { CommonModule } from '@angular/common';

const routes: Route[] = [
    {
        path: '',
        component: DefaultPageComponent,
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [DefaultPageComponent],
})
export class DefaultPageModule {}
