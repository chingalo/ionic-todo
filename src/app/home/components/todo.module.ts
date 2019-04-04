import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [TodoFormComponent, TodoListComponent],
  exports: [TodoFormComponent, TodoListComponent]
})
export class TodoModuleComponents {}
