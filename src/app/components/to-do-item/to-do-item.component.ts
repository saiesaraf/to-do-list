import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }
 
 //set dynamic classes
 setClasses()
 {
   let classes ={
     todo:true,
     'is-complete' :this.todo.completed
   }
   return classes;
 }

 //on toggle method
 onToggle(todo)
 {
   //Toggle in UI
    console.log('toggle')
    todo.completed =!todo.completed;
    //Toggole on server
    this.todoService.toggleCompleted(todo).subscribe(todo =>
      console.log(todo));
 }
 //delete method

 onDelete(todo)
 {
  this.deleteTodo.emit(todo);
 }
}
