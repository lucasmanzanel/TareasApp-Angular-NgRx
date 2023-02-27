import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filtrosValidos, setFilter } from '../../filter/filter.action';
import { borrarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual:filtrosValidos = 'todos'
  filtros: filtrosValidos[] = ['todos','completados','pendientes']

  pendientes:number = 0

  constructor(private store:Store<AppState>) { }


  ngOnInit(): void {
    // this.store.select('filtro')
    //   .subscribe(filtro => {this.filtroActual = filtro})

    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.complete).length;
    })
  }

  cambiarFiltro(filtro:filtrosValidos){
    
    this.store.dispatch(setFilter({filtro}))
  }

  borrarCompletados(){
    this.store.dispatch(borrarCompletados())
  }

}
