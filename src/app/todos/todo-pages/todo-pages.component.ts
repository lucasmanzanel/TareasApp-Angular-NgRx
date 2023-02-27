import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-pages',
  templateUrl: './todo-pages.component.html',
  styleUrls: ['./todo-pages.component.css']
})
export class TodoPagesComponent implements OnInit {

  completado:boolean = false;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll(){
    this.completado = !this.completado;

    this.store.dispatch(toggleAll({compleado: this.completado}))
  }

}
