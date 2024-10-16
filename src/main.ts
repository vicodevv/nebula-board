import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as firebaseAdmin from 'firebase-admin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  // Initialize Firebase Admin
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.applicationDefault(),
    databaseURL: 'https.firebaseio.com',
  });

  await app.listen(3000);
}
bootstrap();
