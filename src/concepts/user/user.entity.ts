import { Entity, Column, Index, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { CreateUserInterface } from './interfaces/user.createInterface';

import * as crypto from 'crypto';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string

  @Index({ unique: true })
  @Column()
  email: string

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }

  @Column()
  password: string

  constructor(obj?: CreateUserInterface) {
    Object.assign(this, obj);
  }
}
