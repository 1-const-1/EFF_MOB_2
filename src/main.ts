import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { pgclnt } from './pgclnt';

async function bootstrap() {
  await pgclnt.connect();

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
