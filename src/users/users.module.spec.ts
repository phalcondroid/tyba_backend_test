import * as bcrypt from 'bcrypt';
import { Test } from '@nestjs/testing';
import { UsersModel } from './models/entities/users.model';
import { FinderService } from './services/finder.service';
import { RegisterService } from './services/register.service';
import { UsersManager } from './users.manager';
import { usersProviders } from './models/providers/users.provider';
import { UsersModule } from './users.module';
import { DatabaseModule } from '../database/database.module';

describe('CatsController', () => {
  let manager: UsersManager;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UsersModule, DatabaseModule],
      providers: [
        FinderService,
        RegisterService,
        UsersManager,
        ...usersProviders,
      ],
    }).compile();

    manager = moduleRef.get<UsersManager>(UsersManager);
  });

  describe('UsersModule', () => {
    it('should register an user', async () => {
      const usersModel = new UsersModel();
      usersModel.id = 1;
      usersModel.name = 'test';
      usersModel.address = 'test street #123';
      usersModel.email = 'test@tyba.co';
      usersModel.username = 'username_test';
      usersModel.password = await bcrypt.hash('123', 10);
      // model.createdAt = new Date();
      manager.registerUser(usersModel);
    });

    it('should find users by id', async () => {
      const usr = manager.getUserById(1);
      expect((await usr).id).toBe(1);
      expect((await usr).name).toBe('test');
      expect((await usr).username).toBe('username_test');
    });

    it('should find users by username', async () => {
      const usr = manager.getUserByUsername('username_test');
      expect((await usr).id).toBe(1);
      expect((await usr).name).toBe('test');
      expect((await usr).username).toBe('username_test');
    });
  });
});
