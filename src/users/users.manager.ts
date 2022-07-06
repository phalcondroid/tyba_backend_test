import { Injectable } from '@nestjs/common';
import { FinderService } from './services/finder.service';
import { UsersModel } from './models/entities/users.model';
import { RegisterService } from './services/register.service';

@Injectable()
export class UsersManager {
  constructor(
    private readonly finder: FinderService,
    private readonly register: RegisterService,
  ) {}

  /**
   * Get user by username
   * @param username string
   * @returns UsersModel
   */
  public async getUserByUsername(username: string): Promise<UsersModel> {
    return await this.finder.getUserByUsername(username);
  }

  /**
   * Get user by pk
   * @param usersId number
   * @returns UsersModel
   */
  public async getUserById(usersId: number): Promise<UsersModel> {
    return await this.finder.getUserByUserId(usersId);
  }

  /**
   *
   */
  public async registerUser(user: UsersModel) {
    return await this.register.registerUser(user);
  }
}
