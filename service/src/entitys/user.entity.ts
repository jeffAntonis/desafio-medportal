import { Entity, Column, PrimaryGeneratedColumn, Index, ManyToMany, JoinTable } from "typeorm";
import { Group } from "./group.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @Index({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: '' })
  app_id: string;

  @ManyToMany(type => Group)
  @JoinTable()
  groups: Group[];
}
