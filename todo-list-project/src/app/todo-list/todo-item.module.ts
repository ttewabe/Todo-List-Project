import { NgModule } from "@angular/core";
import { TodoListComponent} from "./todo-item.component";


@NgModule({
    declarations: [
        TodoListComponent
    ],
    exports: [
        TodoListComponent
    ],
})
export class TodoItemModule {}