import { AuthManager } from '../auth.manager';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/shared/guards/local-auth.guard';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { RequestUser } from '../interfaces/validations/request-user.interface';
import { StartSessionResponse } from '../interfaces/validations/startsession-response.interface';
import { UsersManager } from 'src/users/users.manager';
import { UsersModel } from 'src/users/models/entities/users.model';
import { AlreadyExistException } from 'src/shared/exceptions/alreadyexist.exception';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly manager: AuthManager,
    private readonly usersManager: UsersManager,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async auth(@Request() req: RequestUser): Promise<StartSessionResponse> {
    return this.manager.doLogin(req.user);
  }

  @Post('save')
  async register(@Body() user: UsersModel): Promise<StartSessionResponse> {
    const exist = this.usersManager.getUserByUsername(user.username);
    console.log('existeeee', (await exist).username);
    if (exist != null) {
      throw new AlreadyExistException();
    }
    const usersFromDb = await this.usersManager.registerUser(user);
    usersFromDb.password = '';
    return {
      access_token: this.manager.getAccessToken(
        usersFromDb.username,
        usersFromDb.id,
      ),
      user: usersFromDb,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  public async getInfo(@Request() req: RequestUser): Promise<any> {
    return this.usersManager.getUserById(req.user.userId);
  }
}
