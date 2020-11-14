import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../entitys/user.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
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
      select: ['id', 'name', 'email'],
      relations: ['groups']
    });
  }

  findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({
      select: ['id', 'name', 'email', 'password'],
      where: {
        email
      }
    });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async changeAppId(id: string, appId: string): Promise<User> {
    console.log(id, appId)
    const user = await this.usersRepository.findOne(id);
    user.app_id = appId;
    return await this.usersRepository.save(user);
  }


  async save(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }

  // async relationGroup(userId: string, groupId: string): Promise<User> {
  //   const group = await this.groupsService.findOne(groupId);
  //   const user = await this.usersRepository.findOne(userId, { relations: ["groups"] });

  //   //ADD USER
  //   user.groups = [...user.groups, group];

  //   return await this.usersRepository.save(group);
  // }
}