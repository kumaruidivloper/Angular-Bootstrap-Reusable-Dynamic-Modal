import { Injectable } from '@angular/core';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {

  constructor() { }

  getComponent(componentName: string) {
    if (componentName == "ModalContentComponent") {
      return ModalContentComponent;
    }
    else{
      return "";
    }
  }
}
