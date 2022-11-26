import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ThemeService } from "src/app/core/services/theme.service";
import { ITheme } from "../../interfaces/theme";

@Injectable({
    providedIn: 'root'
})
export class ThemeResolver implements Resolve<ITheme | null> {
    constructor(private themeService: ThemeService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ITheme | null | Observable<ITheme> | Promise<ITheme> {
        const themeId = route.params['id'];
        if (!themeId) {
            this.router.navigate(['/theme/recent']);
            return null;
        }
        return this.themeService.loadTheme(themeId);
    }

}