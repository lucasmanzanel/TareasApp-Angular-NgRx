import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPagesComponent } from './todo-pages/todo-pages.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemsComponent,
    TodoListComponent,
    TodoPagesComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoPagesComponent
  ]
})
export class TodoModule { }
