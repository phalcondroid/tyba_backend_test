import { Injectable } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { UserJwt } from './interfaces/validations/user-jwt.interface';
import { StartSessionResponse } from './interfaces/validations/startsession-response.interface';

@Injectable()
export class AuthManager {
  constructor(private readonly auth: AuthService) {}

  /**
   * Do login vs jwt token validation
   * @param params LoginRequestDto
   * @returns
   */
  public async doLogin(params: UserJwt): Promise<StartSessionResponse> {
    return await this.auth.login(params);
  }

  /**
   * Creates access token with jwt
   * @param username string
   * @param userId number
   * @returns string
   */
  public getAccessToken(username: string, userId: number): string {
    return this.auth.getAccessToken(username, userId);
  }
}
