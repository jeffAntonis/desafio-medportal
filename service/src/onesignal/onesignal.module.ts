import { Module, HttpModule } from '@nestjs/common';
import { OnesignalService } from './onesignal.service';
import { OnesignalController } from './onesignal.controller';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    })
  ],
  providers: [OnesignalService],
  controllers: [OnesignalController],
})
export class OnesignalModule { }
