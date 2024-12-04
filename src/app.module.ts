import { Module } from '@nestjs/common';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path';
import { MainPage } from './app.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, "../../", "public"),
    })
  ],
  controllers: [MainPage],
  providers: [],
})

export class AppModule {}
  