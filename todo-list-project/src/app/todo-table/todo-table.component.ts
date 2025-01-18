import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-todo-table',
    templateUrl: './todo-table.component.html',
    styleUrls: ['./todo-table.component.scss']
})

export class TodoTableComponent {
    title = 'Todo List Table';
    @Input() todos: { title: string, description: string }[] = [];
}