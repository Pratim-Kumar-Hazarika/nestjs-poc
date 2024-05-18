import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get('') ///Decorator
  getUsers() {
    return {
      userName: 'Pratim',
      email: 'pratim.com',
    };
  }
  @Get('posts')
  getUserPosts() {
    return [
      {
        name: 'pratim',
      },
    ];
  }
  @Post()
  createUser(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
    response.send('Created');
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser2(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log('Id==>', id);
    return { id };
  }

  @Get(':id/:postId')
  getNestedParams(@Param('id') id: string, @Param('postId') postId: string) {
    console.log(id);
    return { id, postId };
  }

  // @Get(':id')
  // getQueryParams(@Query('sortBy') sortBy: string) {
  //   console.log(sortBy);
  //   return {
  //     userName: 'Pratim',
  //     email: 'pratim.com',
  //   };
  // }
}
