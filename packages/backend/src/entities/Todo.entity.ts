import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from './User.entity';

@Entity({ name: 'todos' })
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  title: string;

  @Column()
  description: string;

  @Column()
  isPublic: boolean;

  @Column()
  isCompleted: boolean;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.todos)
  user: User;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  public updatedAt: Date;
}
