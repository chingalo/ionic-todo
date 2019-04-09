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
  count: number;

  constructor(
    private appConfigService: AppConfigService,
    private todoService: TodoService
  ) {
    this.isFormLoaded = true;
    this.count = 0;
    this.todos = [];
  }
  ngOnInit() {
    this.currentTodo = null;
    this.intiateApp('dhis_touch');
  }

  async intiateApp(newDb: string, oldDataBase?: string) {
    this.todos = [];
    try {
      await this.appConfigService.setConnection(newDb, oldDataBase);
      this.count++;
      setTimeout(() => {
        this.getUpdateTodos();
      }, 200);
    } catch (error) {
      console.log(JSON.stringify({ type: 'Connection error : ', error }));
      this.getUpdateTodos();
    }
  }

  changeDb() {
    this.intiateApp(`dhis_touch_${this.count}`, 'dhis_touch');
  }

  onSaveTodo(data) {
    const { status } = data;
    if (status) {
      this.currentTodo = null;
      this.getUpdateTodos();
    }
  }

  async onSetCurrentTodo(response) {
    try {
      const { todo } = response;
      this.isFormLoaded = false;
      this.currentTodo = await this.todoService.getTodoById(todo.id);
      this.isFormLoaded = true;
    } catch (error) {
      console.log(JSON.stringify({ type: 'Connection error : ', error }));
    }
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
