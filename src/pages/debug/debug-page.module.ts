import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DebugPageComponent } from './debug-page.component';

const routes: Route[] = [
    {
        path: '',
        component: DebugPageComponent,
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [DebugPageComponent],
})
export class DebugPageModule {}
