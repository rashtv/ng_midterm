import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    {
      id: 1,
      name: 'Ilyas',
      img: ''
    },
    {
      id: 2,
      name: 'Alexander',
      img: ''
    },
    {
      id: 1,
      name: 'Yerassyl',
      img: ''
    },
  ]

  constructor() { }

  getAllUsers() {
    return this.users
  }
}
