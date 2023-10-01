import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home Details'
    },
    {
        path: 'test',
        component: HousingLocationComponent,
        title: 'Home Page Test'
    }
];

export default routeConfig;