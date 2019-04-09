import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Array<Todo>;

  @Output() currentTodo = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.todos = this.todos || [];
  }

  setCurrentTodo(todo: Todo) {
    this.currentTodo.emit({ todo });
  }

  trackByFn(index, item) {
    return item && item.id ? item.id : index;
  }
}
