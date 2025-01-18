import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  
  todoList = [
    { title: 'Buy Groceries', description: 'Milk, Bread, Eggs' },
    { title: 'Workout', description: 'Morning run for 30 minutes' },
    { title: 'Study', description: 'Read Angular documentation' }
  ];
}
