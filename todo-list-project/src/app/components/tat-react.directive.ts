import * as React from 'react';
import { Directive,ElementRef, Input, OnDestroy } from "@angular/core";
import {Root, createRoot} from 'react-dom/client';


@Directive({
    selector: '[reactComponent]'
})

export class TatReactDirective implements OnDestroy{
    @Input() set reactComponent(importPath: string){
        import(`${importPath}`).then(component => this.root.render(component.default()));
}
private root:Root;
constructor(private rootElement:ElementRef){
    this.root = createRoot(rootElement.nativeElement);
}
ngOnDestroy(): void {
    this.root.unmount();
}
}





