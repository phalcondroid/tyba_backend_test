import * as bcrypt from 'bcrypt';
import { Inject, Injectable } from '@nestjs/common';
import { UsersModel } from '../models/entities/users.model';

@Injectable()
export class RegisterService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof UsersModel,
  ) {}

  /**
   * Get user by user model data
   * @param user UsersModel
   * @returns UsersModel
   */
  public async registerUser(user: UsersModel): Promise<UsersModel> {
    return this.usersRepository.create({
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      username: user.username,
      password: await bcrypt.hash(user.password, 10),
    });
  }
}
