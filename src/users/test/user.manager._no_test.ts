import * as bcrypt from 'bcrypt';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { UsersManager } from '../users.manager';
import { UsersModel } from '../models/entities/users.model';
import { UsersModule } from '../users.module';
import { usersProviders } from '../models/providers/users.provider';
import { DatabaseModule } from '../../database/database.module';
import { RegisterService } from '../services/register.service';
import { FinderService } from '../services/finder.service';

/*
describe('UsersManager', () => {
  let app: INestApplication;
  let manager: UsersManager;
  let usersModel: UsersModel;
  // let usersRepository: typeof UsersModel;

  beforeAll(async () => {
    const usersModule = await Test.createTestingModule({
      imports: [UsersModule, DatabaseModule],
      providers: [
        FinderService,
        RegisterService,
        UsersManager,
        ...usersProviders,
      ],
    }).compile();
    app = usersModule.createNestApplication();
    console.log(app);
    manager = app.get('usersManager');
    await app.init();
  });

  describe('UsersManager', () => {
    it('should register an user', async () => {
      usersModel.id = 1;
      usersModel.name = 'test';
      usersModel.address = 'test street #123';
      usersModel.email = 'test@tyba.co';
      usersModel.username = 'username_test';
      usersModel.password = await bcrypt.hash('123', 10);
      // model.createdAt = new Date();
      manager.registerUser(usersModel);
    });
  });
});
*/
