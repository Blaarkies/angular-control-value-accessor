import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNativeInputsComponent } from './pages/page-native-inputs/page-native-inputs.component';
import { PageAngularInputsComponent } from './pages/page-angular-inputs/page-angular-inputs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageAutocompleteComponent } from './pages/page-autocomplete/page-autocomplete.component';
import { AutocompleteMonkeyTelephoneComponent } from './components/autocomplete-monkey-telephone/autocomplete-monkey-telephone.component';
import { InputMonkeyTelephoneComponent } from './components/autocomplete-monkey-telephone/input-monkey-telephone/input-monkey-telephone.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { InputComponent } from './components/input/input.component';
import { PageCustomControlsComponent } from './pages/page-custom-controls/page-custom-controls.component';
import { InputSpeechComponent } from './components/input-speech/input-speech.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNativeInputsComponent,
    PageAngularInputsComponent,
    PageAutocompleteComponent,
    AutocompleteMonkeyTelephoneComponent,
    InputMonkeyTelephoneComponent,
    AutocompleteComponent,
    InputComponent,
    PageCustomControlsComponent,
    InputSpeechComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
