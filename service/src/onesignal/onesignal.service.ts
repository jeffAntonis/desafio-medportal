import { HttpService, BadRequestException, Injectable } from '@nestjs/common';

import { GroupsService } from "../groups/groups.service";

@Injectable()
export class OnesignalService {
  constructor(private httpService: HttpService, private groupsService: GroupsService) { }

  async createNotification(message: string, groupId: string) {
    const appIds = [];
    const group = await this.groupsService.findOne(groupId);

    group.users.map(user => {
      if (user.app_id) {
        appIds.push(user.app_id);
      }
    });

    try {
      const response = await this.httpService.post('https://onesignal.com/api/v1/notifications', {
        'app_id': process.env.ONE_SIGNAL_APP_ID,
        'contents': { en: message },
        'include_player_ids': appIds
      }, {
        headers: {
          "authorization": `Basic ${process.env.ONE_SIGNAL_TOKEN}`,
          "content-type": "application/json"
        }
      }).toPromise();

      return response.data;
    } catch (error) {
      throw new BadRequestException('Error:', error.response?.data?.errors?.[0]);
    }
  }
}
