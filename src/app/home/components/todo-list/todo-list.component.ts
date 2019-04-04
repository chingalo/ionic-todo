import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Array<Todo>;

  constructor() {}

  ngOnInit() {
    this.todos = this.todos || [];
  }
}
