import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() todo!:Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  chkCompleted!: FormControl;
  txtInput!: FormControl;

  edit:boolean = false;

  constructor(private store:Store<AppState>) {}

  ngOnInit(): void {

    this.chkCompleted = new FormControl(this.todo.complete);
    this.txtInput = new FormControl(this.todo.text, Validators.required)

    this.chkCompleted.valueChanges.subscribe(() => 
      this.store.dispatch(actions.toggle({id:this.todo.id}))
      
    )

  }

  editar(){
    this.edit = true;

    this.txtInput.setValue(this.todo.text)

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    },1)
  }

  terminarEdicion(){
    this.edit = false

    if(this.txtInput.invalid){
      return
    }

    if(this.txtInput.value === this.todo.text){
      return
    }

    this.store.dispatch(actions.editar(
      {id:this.todo.id,texto:this.txtInput.value}
      
    ))
  }


  borrar(){
    this.store.dispatch(actions.borrar({id: this.todo.id}))
  }

}
