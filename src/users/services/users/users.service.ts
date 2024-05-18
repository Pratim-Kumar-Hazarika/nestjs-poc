import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/type';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      username: 'Pratimxx',
      email: 'pratisssm.com',
    },
    {
      username: 'Pra',
      email: 'yo.com',
    },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }

  fetchUserById(id: number) {
    return { id, usename: 'pratim' };
  }
}
