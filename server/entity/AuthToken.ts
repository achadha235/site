import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { User } from "./User";

@Entity()
export class AuthToken extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  token: string;

  @ManyToOne((type) => User, (user) => user.id)
  user: User;
}
