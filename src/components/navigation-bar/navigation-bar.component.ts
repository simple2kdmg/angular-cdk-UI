import { ChangeDetectionStrategy, Component } from '@angular/core';
import { take } from 'rxjs';
import { NavigationItem } from 'src/models/routing/navigation-item.model';
import { ApplicationPath } from 'src/models/shared/application-path.enum';
import { NavigationService } from 'src/services/navigation.service';

@Component({
    selector: 'navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBarComponent {
    readonly navItems: NavigationItem[] = [
        {
            pageTitle: 'Default',
            relativeUrl: ApplicationPath.Default,
            sortOrder: 1,
        },
        {
            pageTitle: 'Debug',
            relativeUrl: ApplicationPath.Debug,
            sortOrder: 2,
        },
    ];
    readonly currentUrl$ = this.navigationService.urlWithoutQuery$;

    constructor(private readonly navigationService: NavigationService) {}

    onLinkClick(url: string): void {
        this.currentUrl$.pipe(take(1)).subscribe((currentUrl) => {
            if (currentUrl === url) return;

            this.navigationService.updateRoute({ url });
        });
    }
}
