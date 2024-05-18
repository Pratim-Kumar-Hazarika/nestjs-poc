import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
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
  createUser2(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }
}
