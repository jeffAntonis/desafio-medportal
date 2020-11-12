import { Controller, Get, Post, Request, Param } from '@nestjs/common';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) {
  }

  @Get('/')
  findAll() {
    return this.groupsService.findAll();
  }

  @Get('/:id')
  find(@Param() params) {
    return this.groupsService.findOne(params.id);
  }

  @Post('/')
  async create(@Request() req) {
    return await this.groupsService.create(req.body);
  }

  @Post('/relation-user')
  async relationUser(@Request() req) {
    const { userId, groupId } = req.body;
    return await this.groupsService.relationUser(userId, groupId);
  }

}
