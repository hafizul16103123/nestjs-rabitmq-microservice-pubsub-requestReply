import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('USER_SERVICE') private readonly rmqClient: ClientRMQ) { }
  async rpcRequest(): Promise<string> {
    return await this.rmqClient.send('auth.getHello', { data: { "accessToken": "ACCESS_TOKEN" } }).toPromise()
  }
  async eventRequest(): Promise<string> {
    // return await this.rmqClient.send('auth.getHello.event', {data:{ "accessToken": "ACCESS_TOKEN"} }).toPromise()
    this.rmqClient.emit('auth.getHello.event', { data: { "accessToken": "ACCESS_TOKEN" } })
    return "Event sent"
  }
}
