import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: { username: string, password: string, role: string }): Promise<User> {
    return this.userService.createUser(createUserDto.username, createUserDto.password, createUserDto.role);
  }
}