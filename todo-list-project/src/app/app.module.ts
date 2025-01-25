import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemModule } from './todo-list/todo-item.module';
import { CardComponent } from './card/card.component';
import { TodoTableComponent } from './todo-table/todo-table.component';
import { TatReactDirective } from './components/tat-react.directive';
import { ButtonWrapperComponent } from './components/button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TodoTableComponent,
    TatReactDirective, //Directive to integrate react component in angular
    ButtonWrapperComponent //Component to wrap react component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
