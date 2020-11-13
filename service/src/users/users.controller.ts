import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

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

  @Post('/change-app-id')
  changeAppId(@Request() req) {
    const { userId, appId } = req.body;
    return this.usersService.changeAppId(userId, appId);
  }

}
