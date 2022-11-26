import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ThemeResolver } from "./resolvers/theme.resolver";
import { ThemesDetailPageComponent } from "./themes-detail-page/themes-detail-page.component";
import { ThemesNewPageComponent } from "./themes-new-page/themes-new-page.component";

const routes: Routes = [
    {
        path: 'theme',
        children: [
            {
                path: 'recent',
                component: MainComponent
            },
            {
                path: 'new',
                component: ThemesNewPageComponent
            },
            {
                path: 'detail/:id',
                resolve: {
                    theme: ThemeResolver
                },
                component: ThemesDetailPageComponent
            }
        ]
    }
];

export const ThemesRoutingModule = RouterModule.forChild(routes);