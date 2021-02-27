import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNativeInputsComponent } from './pages/page-native-inputs/page-native-inputs.component';
import { UsableRoutes } from './usable-routes';
import { PageAngularInputsComponent } from './pages/page-angular-inputs/page-angular-inputs.component';
import { PageAutocompleteComponent } from './pages/page-autocomplete/page-autocomplete.component';
import { PageCustomControlsComponent } from './pages/page-custom-controls/page-custom-controls.component';

const routes: Routes = [
  {path: '', component: PageNativeInputsComponent},
  {path: UsableRoutes.NativeInputs, component: PageNativeInputsComponent},
  {path: UsableRoutes.AngularInputs, component: PageAngularInputsComponent},
  {path: UsableRoutes.Autocomplete, component: PageAutocompleteComponent},
  {path: UsableRoutes.CustomControl, component: PageCustomControlsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
