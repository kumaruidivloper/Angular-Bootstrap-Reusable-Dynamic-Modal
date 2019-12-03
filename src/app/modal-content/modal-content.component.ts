import {
    Component, Input, OnInit,
    ComponentFactoryResolver, ViewContainerRef, ViewChild, ElementRef, Renderer2, AfterContentInit
  } from '@angular/core';
  
  @Component({
    selector: 'app-ModalContentComponent',
    templateUrl: './modal-content.component.html',
    styleUrls: ['./modal-content.component.scss']
  })
  export class ModalContentComponent implements OnInit {
  
    @Input() data: any;
    constructor(
      private el: ElementRef,
      private ren: Renderer2,
      private resolver: ComponentFactoryResolver
    ) {}
  
    ngOnInit() {
      console.log(this.data);
    }
  
  }
  