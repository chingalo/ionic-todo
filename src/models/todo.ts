import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('todo')
export class Todo {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
}
