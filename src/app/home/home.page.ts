import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../services/app-config.service';
import { TodoService } from '../services/todo.service';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  name: string;
  description: string;

  currentTodo: Todo;
  isFormLoaded: boolean;

  todos: Array<Todo>;

  constructor(
    private appConfigService: AppConfigService,
    private todoService: TodoService
  ) {
    this.isFormLoaded = true;
  }
  ngOnInit() {
    this.currentTodo = null;
    this.todos = [];
    this.intiateApp();
  }

  async intiateApp() {
    try {
      await this.appConfigService.setConnection('dhis_touch');
      this.getUpdateTodos();
    } catch (error) {
      console.log(JSON.stringify({ type: 'Connection error : ', error }));
    }
  }

  onSaveTodo(data) {
    const { status } = data;
    if (status) {
      this.currentTodo = null;
      this.getUpdateTodos();
    }
  }

  onSetCurrentTodo(response) {
    const { todo } = response;
    this.isFormLoaded = false;
    this.currentTodo = todo;
    setTimeout(() => {
      this.isFormLoaded = true;
    }, 5);
  }

  async getUpdateTodos() {
    try {
      const todos = await this.todoService.getAllTodo();
      this.todos = todos;
    } catch (error) {
      console.log(JSON.stringify({ type: 'List error : ', error }));
    }
  }
}
