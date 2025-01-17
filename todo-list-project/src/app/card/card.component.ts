import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // The @Input() decorator is used to pass data from the parent component to the child component and or properties bindable from a parent component.
  @Input() title: string = '';
  @Input() description: string = '';
}