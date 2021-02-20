import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNativeInputsComponent } from './pages/page-native-inputs/page-native-inputs.component';
import { UsableRoutes } from './usable-routes';

const routes: Routes = [
  {path: UsableRoutes.NativeInput, component: PageNativeInputsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
