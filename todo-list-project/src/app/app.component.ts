import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //integrate react component in angular, sothat import path is passed as a prop
  importPath = "src/app/components/Card";
 
  //For the table component  title and description are passed as props
  todoList = [
    { title: 'Buy Groceries', description: 'Milk, Bread, Eggs' },
    { title: 'Workout', description: 'Morning run for 30 minutes' },
    { title: 'Study', description: 'Read Angular documentation' }
  ];
}
