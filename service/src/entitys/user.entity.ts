import {Entity, Column, PrimaryGeneratedColumn, Index} from "typeorm";

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
}
