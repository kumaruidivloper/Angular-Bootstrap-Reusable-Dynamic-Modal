import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { ModalDirective } from '../app/directive/modal.directive';
import { DatacontainerDirective } from '../app/directive/datacontainer.directive';
import { ComponentLoaderService } from '../app/service/component-loader.service';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    ModalDialogComponent,
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
    Demo1Component,
    Demo2Component,
    ModalDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
