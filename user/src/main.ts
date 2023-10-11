import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://admin:admin-pass@localhost:5672'],
      queue: 'rpc_queue_user',
      queueOptions: {
        durable: false
      }
    },
  })
  await app.startAllMicroservices();
  await app.listen(3002);
  console.log("APP is running")
}
bootstrap();
