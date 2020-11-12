import { BadRequestException, Injectable } from '@nestjs/common';
import { OneSignalService } from 'onesignal-api-client-nest';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const request = require('request');

@Injectable()
export class OnesignalService {
  constructor(private readonly oneSignalService: OneSignalService) { }

  async createNotification(message: string) {
    const response = await request(
      {
        method: 'POST',
        uri: 'https://onesignal.com/api/v1/notifications',
        headers: {
          "authorization": "Basic OTMzOTMwOGEtOWM4YS00YjI1LWFmYTItNzJiOTZhMTE0ZTRj",
          "content-type": "application/json"
        },
        json: true,
        body: {
          'app_id': '230b5cf4-6dbc-4ab0-8b33-3cc56469976f',
          'contents': { en: message },
          'include_player_ids': ["1e53e5d9-92b8-436a-8cd3-faa4160255e8"]
        }
      },
      // function (error, response, body) {
      //   if (!body.errors) {
      //     return body;
      //   } else {
      //     throw new BadRequestException('Error:', body.errors);
      //   }
      // }
    );

    console.log(response)
  }
}
