import {
  Controller,
  Get,
  Req,
  Res,
  Param,
  Session,
  Header,
} from '@nestjs/common';
import { Request } from 'express';

@Controller({
  path: 'cats',
})
export class CatsController {
  @Header('Cache-Control', 'no-store')
  @Header('nico', 'aaa')
  @Get('/query/:id')
  getQuery(@Param() params): string {
    console.log('params:::', params);
    let {id} = params;
    return `your query is ${id}`;
  }

  @Get('/session')
  getSession(@Session() session): string {
    console.log('session:::', session);
    return `your query is ${session}`;
  }

  @Get('/req')
  getReq(@Req() request: Request): string {
    console.log('request:::', request);
    return `your query is req`;
  }
}
