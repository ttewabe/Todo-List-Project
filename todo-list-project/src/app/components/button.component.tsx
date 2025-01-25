
import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild } from "@angular/core";
import { createRoot, Root } from 'react-dom/client';//Handles mounting/unmounting of the React component
import {Button, IButtonProps } from "./Button";
import *as React from 'react';


@Component({
    selector: 'app-button',//Declares the Angular component’s selector (<app-button></app-button>).
    template: `<div #root></div>`,//The #root reference allows Angular to access this div where the React component will be rendered.
    styleUrls: ['./button.component.scss']
})

export class ButtonWrapperComponent implements OnChanges,AfterViewInit,OnDestroy {
    @ViewChild('root') container!: ElementRef<HTMLDivElement>;//Access to the <div> element in the template.
    root?: Root;//Root object to mount/unmount the React component.
@Input() btnProps!: IButtonProps //Allows passing props from Angular to React.

//This Lifecycle hook can help to Re-renders the React component when @Input changes.
    ngOnChanges(changes: SimpleChanges): void {
        this.render(); //Called when btnProps changes and Calls render() to update the React component.
    }

    //Initializes React component after Angular finishes rendering the view.
    ngAfterViewInit(): void {
        this.render();//Called after Angular initializes the component.Calls render() to mount the React component.
    }

    //Unmounts the React component when Angular destroys the component.
    ngOnDestroy(): void {
        this.root?.unmount();//Unmounts the React component to prevent memory leaks when Angular destroys this component.
    }

    private render() {
        if (!this.container )return;//Ensures the React component is only rendered when this.container exists
        if(!this.root){
            this.root = createRoot(this.container.nativeElement);//Creates a React root inside the <div> only once.
        }
        this.root.render(
        <React.StrictMode>
             <Button {...this.btnProps}/> {/*Passes btnProps from Angular to React */}
        </React.StrictMode>
    );
    }
}