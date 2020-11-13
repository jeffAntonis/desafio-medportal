import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

//ENTITYS
import { User } from './entitys/user.entity';
import { Group } from './entitys/group.entity';
import { GroupsModule } from './groups/groups.module';
import { OnesignalController } from './onesignal/onesignal.controller';
import { OnesignalService } from './onesignal/onesignal.service';
import { OnesignalModule } from './onesignal/onesignal.module';

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
  }),
    HttpModule,
    AuthModule, UsersModule, GroupsModule, OnesignalModule],
  controllers: [AppController, OnesignalController],
  providers: [AppService, OnesignalService],
})
export class AppModule { }
