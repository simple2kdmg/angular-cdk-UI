import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    templateUrl: 'default-page.component.html',
    styleUrls: ['default-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultPageComponent {
    constructor() {}

    get initialize(): boolean {
        console.count('DefaultPageComponent redrawn');
        return true;
    }
}
