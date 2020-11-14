import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Group } from '../entitys/group.entity';
import { User } from '../entitys/user.entity';
import { UsersService } from "../users/users.service";

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private groupsRepository: Repository<Group>,
    private usersService: UsersService,
  ) { }


  create(groupData: Group): Promise<Group> {
    return this.groupsRepository.save(groupData);
  }

  findAll(): Promise<Group[]> {
    return this.groupsRepository.find({
      relations: ['users']
    });
  }

  findOne(id: string): Promise<Group> {
    return this.groupsRepository.findOne(id, {
      relations: ['users']
    });
  }

  async relationUser(userId: string, groupId: string): Promise<Group> {
    const group = await this.groupsRepository.findOne(groupId, { relations: ["users"] });
    const user = await this.usersService.findOne(userId);

    //ADD USER
    group.users = [...group.users, user];

    return await this.groupsRepository.save(group);
  }

  async removeRelationUser(userId: string, groupId: string): Promise<Group> {
    const group = await this.groupsRepository.findOne(groupId, { relations: ["users"] });
    const user = await this.usersService.findOne(userId);

    //REMOVE USER
    group.users = group.users.filter((userRow: User) => userRow.id !== user.id);

    return await this.groupsRepository.save(group);
  }

}
