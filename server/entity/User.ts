import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  Index,
  In,
} from 'typeorm'

import { AuthToken } from './AuthToken'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Index({ unique: true })
  @Column({ nullable: false, unique: true })
  email: string

  @Column({ nullable: false })
  verified: boolean

  @OneToMany((type) => AuthToken, (token) => token.id)
  tokens: AuthToken[]
}
