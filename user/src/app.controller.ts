import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('auth.getHello')
  async getHello(data: any): Promise<string> {
    console.log({ data })
    return "User from user service";
  }

  @EventPattern('auth.getHello.event')
  async getHello12(data: any): Promise<void> {
    setTimeout(() => {
      console.log("User from user service 1")
    }, 3000)
  }
  @EventPattern('auth.getHello.event')
  async getHello2(data: any): Promise<void> {
    setTimeout(() => {
      console.log("User from user service 2")
    }, 4000)
  }


}
