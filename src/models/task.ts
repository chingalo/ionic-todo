import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('task')
export class Task {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
}
