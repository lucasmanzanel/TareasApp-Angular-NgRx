import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filter/filter.action';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro:filtrosValidos): Todo[] {


    switch(filtro){

      case 'completados':
        return todos.filter(todo => todo.complete);

      case 'pendientes':
        return todos.filter(todo => !todo.complete);

      default:
        return todos;

    }



  }

}
