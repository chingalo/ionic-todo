import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  name: string;
  description: string;

  @Output() saveTodoEvent = new EventEmitter();

  constructor(
    private todoService: TodoService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async saveTodo() {
    try {
      const todo = new Todo();
      todo.description = this.description;
      todo.name = this.name;
      todo.isActive = false;
      await this.todoService.addTodo(todo);
      const toast = await this.toastController.create({
        message: 'Saved successfully',
        duration: 2000,
        position: 'top'
      });
      toast.present();
      this.name = '';
      this.description = '';
      this.saveTodoEvent.emit({ status: true });
    } catch (error) {
      console.log(JSON.stringify({ type: 'Add todo error : ', error }));
    }
  }
}
