import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todo')
export class Todo {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  isActive: boolean;
}
