import { Controller, Post, Request } from '@nestjs/common';
import { OnesignalService } from './onesignal.service';


@Controller('onesignal')
export class OnesignalController {
  constructor(private oneSignalService: OnesignalService) {
  }

  @Post('/send-message')
  async create(@Request() req) {
    const { message, groupId } = req.body
    return await this.oneSignalService.createNotification(message, groupId);
  }
}
