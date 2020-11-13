import { HttpService, BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class OnesignalService {
  constructor(private httpService: HttpService) { }

  async createNotification(message: string) {
    try {
      const response = await this.httpService.post('https://onesignal.com/api/v1/notifications', {
        'app_id': '230b5cf4-6dbc-4ab0-8b33-3cc56469976f',
        'contents': { en: message },
        'include_player_ids': ["1e53e5d9-92b8-436a-8cd3-faa4160255e8"]
      }, {
        headers: {
          "authorization": "Basic OTMzOTMwOGEtOWM4YS00YjI1LWFmYTItNzJiOTZhMTE0ZTRj",
          "content-type": "application/json"
        }
      }).toPromise();

      return response.data;
    } catch (error) {
      throw new BadRequestException('Error:', error.response?.data?.errors?.[0]);
    }
  }
}
