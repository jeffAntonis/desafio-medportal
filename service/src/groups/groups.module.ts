import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { Group } from '../entitys/group.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([Group])],
  controllers: [GroupsController],
  providers: [GroupsService]
})
export class GroupsModule { }
