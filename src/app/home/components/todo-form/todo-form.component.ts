import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from 'src/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  todo: Todo;

  @Input() currentTodo: Todo;

  @Output() saveTodoEvent = new EventEmitter();

  constructor(
    private todoService: TodoService,
    private toastController: ToastController
  ) {
    this.todo = new Todo();
    this.reinitializeTodo();
  }

  ngOnInit() {
    if (this.currentTodo) {
      const { id, name, description, isActive } = this.currentTodo;
      this.todo = { ...this.todo, id, name, description, isActive };
    }
  }

  async saveTodo() {
    try {
      await this.todoService.saveTodo(this.todo);
      const toast = await this.toastController.create({
        message: 'Saved successfully',
        duration: 2000,
        position: 'top'
      });
      this.saveTodoEvent.emit({ status: true });
      this.reinitializeTodo();
      toast.present();
    } catch (error) {
      console.log(JSON.stringify({ type: 'Add todo error : ', error }));
    }
  }

  reinitializeTodo() {
    delete this.todo.id;
    this.todo.name = '';
    this.todo.description = '';
    this.todo.isActive = false;
  }
}
