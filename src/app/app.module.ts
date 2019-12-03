import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { AppComponent } from './app.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { ModalDirective } from '../app/directive/modal.directive';
import { DatacontainerDirective } from '../app/directive/datacontainer.directive';
import { ComponentLoaderService } from '../app/service/component-loader.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalDialogComponent,
    ModalContentComponent,
    ModalDirective,
    DatacontainerDirective
  ],
  providers: [ComponentLoaderService],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  entryComponents: [
    ModalContentComponent,
    ModalDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
