import { Controller, Request, Post, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from "../users/users.service";

@Controller('auth')
export class AuthController {
  constructor(private usersService: UsersService, private jwtService: JwtService) {
  }

  @Post('/login')
  async login(@Request() req) {
    const { email, password } = req.body;

    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new NotFoundException();
    }
    if (await bcrypt.compare(password, user.password)) {
      return {
        access_token: this.jwtService.sign({ ...user }),
      };
    }
    throw new UnauthorizedException();
  }

  @Post('/register')
  async register(@Request() req) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    return await this.usersService.create(req.body);
  }
}
