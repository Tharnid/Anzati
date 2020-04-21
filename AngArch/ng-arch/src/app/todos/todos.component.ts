import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title = 'ngArch Todos';
  todos;

  constructor(private todosService: TodosService) {
    this.todosService.getTodos().subscribe(data => {// have to subscribe because it is an observable
      // console.log(data);
      this.todos = data;
    });
  }

  ngOnInit() {
  }

}
