import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IBlog } from '../model/blog.model';

@Entity('blog')
export class BlogEntity implements IBlog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  date: Date;

  @Column()
  home?: number;

  @Column()
  image: string;

  @Column()
  resume?: string;

  @Column()
  status: number;

  @Column()
  tag?: string;

  @Column()
  time: string;

  @Column()
  date_update: Date;
}
