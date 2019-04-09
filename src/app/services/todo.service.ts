import { Injectable } from '@angular/core';
import { getRepository, Repository } from 'typeorm';
import { Todo } from 'src/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() {}

  async getAllTodo() {
    const todoRepository = getRepository('todo') as Repository<Todo>;
    const todos = await todoRepository.createQueryBuilder().getMany();
    return todos;
  }

  async saveTodo(todo: Todo) {
    const todoRepository = getRepository('todo') as Repository<Todo>;
    await todoRepository.save([todo]);
  }

  async getTodoById(id: string) {
    const todoRepository = getRepository('todo') as Repository<Todo>;
    const todo = todoRepository.findOne(id);
    return todo;
  }
}
