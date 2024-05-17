import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('') ///Decorator
  getUsers() {
    return {
      userName: 'Pratim',
      email: 'pratim.com',
    };
  }
}
