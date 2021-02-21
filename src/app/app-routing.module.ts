import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNativeInputsComponent } from './pages/page-native-inputs/page-native-inputs.component';
import { UsableRoutes } from './usable-routes';
import { PageAngularInputsComponent } from './pages/page-angular-inputs/page-angular-inputs.component';

const routes: Routes = [
  {path: UsableRoutes.NativeInputs, component: PageNativeInputsComponent},
  {path: UsableRoutes.AngularInputs, component: PageAngularInputsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
