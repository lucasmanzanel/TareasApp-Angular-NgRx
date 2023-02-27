import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toggle, editar, borrar, toggleAll, borrarCompletados } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje Iroman'),
  new Todo('Robar escudo de Capitan America')



];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  
  on(borrarCompletados, state => state.filter(todo => !todo.complete) ),

  on(borrar, (state, {id}) => state.filter(todo => todo.id !== id)),

  on(toggleAll, (state, {compleado}) => state
    .map(todo => {
      return {
        ...todo,
        complete: compleado
      }
    })),

  on(toggle, (state, { id }) => {
    return state.map(todo => {

      if (todo.id === id) {

        // NO, no se manipula el store
        // todo.complete = !todo.complete;
        // return todo
        return {
          ...todo,
          complete: !todo.complete
        }
      } else {
        return todo;
      }

    })
  }),

  on(editar, (state, { id, texto }) => {
    return state.map(todo => {

      if (todo.id === id) {
        return {
          ...todo,
          text: texto
        }
      } else {
        return todo;
      }

    })
  }),

  

);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action)
}
