import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

//ENTITYS
import { User } from './entitys/user.entity';
import { Group } from './entitys/group.entity';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'medportal',
    entities: [User, Group],
    synchronize: true,
  }), AuthModule, UsersModule, GroupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
