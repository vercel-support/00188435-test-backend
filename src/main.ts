import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
// import { AppModule } from './app.module';

console.log(1);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
