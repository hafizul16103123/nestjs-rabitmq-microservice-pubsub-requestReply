import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('rpc-request')
  async rpcRequest(): Promise<string> {
    return await this.appService.rpcRequest();
  }
  @Get('event-request')
  async eventRequest(): Promise<string> {
    return await this.appService.eventRequest();
  }


}
