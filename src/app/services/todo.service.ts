import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';
import { url } from 'inspector';

const httpOptions ={
  headers : new HttpHeaders({
    'Content-type' :'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http:HttpClient) { }

   // Get Todos
   getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

   //DeleteTo Completed
   deletetodo(todo:Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOptions);
  }
  //Toggle Completed
  toggleCompleted(todo:Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url,todo,httpOptions)
  }
 //Add todo completed
 addTodo(todo:Todo):Observable<Todo>{
   return this.http.post<Todo>(this.todosUrl,todo,httpOptions);
 }
 
   
  
}
