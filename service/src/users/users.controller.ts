import { Controller, Get, Post, Request, UseGuards, Param } from '@nestjs/common';

import { UsersService } from "./users.service";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService
  ) { }


  @UseGuards(JwtAuthGuard)
  @Get('/')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/:id')
  find(@Param() params) {
    return this.usersService.findOne(params.id);
  }

  @Post('/change-app-id')
  changeAppId(@Request() req) {
    const { userId, appId } = req.body;
    return this.usersService.changeAppId(userId, appId);
  }

  // @Post('/relation-group')
  // async realtionGroup(@Request() req) {
  //   const { userId, groupId } = req.body;
  //   return await this.usersService.relationGroup(userId, groupId);
  // }

}
