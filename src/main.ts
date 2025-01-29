import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [
        'https://clinicassempresorrindo.com.br/',
        'https://beta.clinicassempresorrindo.com.br/'
      ],
      allowedHeaders: ['Content-Type', 'Accept', 'access-key'],
      methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
      credentials: true,
      optionsSuccessStatus: 204,
      preflightContinue: false
    }
  });
  await app.listen(3002);
}
bootstrap();
