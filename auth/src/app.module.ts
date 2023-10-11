import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE', transport: Transport.RMQ,
        options: {
          urls: ['amqp://admin:admin-pass@localhost:5672'],
          queue: 'rpc_queue_user',
          queueOptions: {
            durable: false
          }
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
