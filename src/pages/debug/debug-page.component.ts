import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    templateUrl: 'debug-page.component.html',
    styleUrls: ['debug-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DebugPageComponent {
    constructor() {}

    get initialize(): boolean {
        console.count('DebugPageComponent redrawn');
        return true;
    }
}
