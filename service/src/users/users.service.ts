import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../entitys/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async create(userData: User): Promise<User> {
    return await this.usersRepository.save(userData);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({
      select: ['id', 'name', 'email']
    });
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id, {
      select: ['id', 'name', 'email']
    });
  }

  findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({
      select: ['id', 'name', 'email'],
      where: {
        email
      }
    });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}