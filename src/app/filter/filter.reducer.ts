import { createReducer, on } from '@ngrx/store';
import { setFilter, filtrosValidos } from './filter.action';

export const initialState:filtrosValidos = 'todos';

const _filterReducer = createReducer<filtrosValidos>(initialState,

    on(setFilter, (state, {filtro}) => filtro))

export function filterReducer(state: any, action: any) {
  return _filterReducer(state, action)
}
