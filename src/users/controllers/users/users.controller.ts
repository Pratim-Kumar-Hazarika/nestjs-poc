import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('') ///Decorator
  @UseGuards(AuthGuard)
  getUsers() {
    return this.userService.fetchUsers();
  }
  @Get('posts')
  getUserPosts() {
    return [
      {
        name: 'pratim',
      },
    ];
  }
  // @Post()
  // createUser(@Req() request: Request, @Res() response: Response) {
  //   console.log(request.body);
  //   response.send('Created');
  // }

  @Post('')
  @UsePipes(new ValidationPipe())
  createUser2(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    console.log(userData.age.toPrecision());
    return this.userService.createUser(userData);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    // throw new HttpException('User not found', HttpStatus.BAD_REQUEST);

    return this.userService.fetchUserById(id);
  }

  @Get(':id/:postId')
  getNestedParams(@Param('id') id: string, @Param('postId') postId: string) {
    console.log(id);
    return { id, postId };
  }

  // @Get(':id')
  // getQueryParams(@Query('sortBy', ParseBoolPipe) sortBy: boolean) {
  //   console.log(sortBy);
  //   return {
  //     userName: 'Pratim',
  //     email: 'pratim.com',
  //   };
  // }
}
