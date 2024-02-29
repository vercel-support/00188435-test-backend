import { Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from '@/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:test')
  getHello(@Param('test') test: string, @Req() { headers }): string {
    console.log({ test, headers });

    return this.appService.getHello();
  }
}
