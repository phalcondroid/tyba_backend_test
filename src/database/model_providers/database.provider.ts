import { Sequelize } from 'sequelize-typescript';
import { DatabaseConfig } from '../config/database.config';
import { UsersModel } from '../../users/models/entities/users.model';

export const DatabaseProvider = {
  provide: 'SEQUELIZE',
  inject: [DatabaseConfig],
  useFactory: async (config: DatabaseConfig) => {
    console.log(config);
    const sequelize = new Sequelize({
      dialect: 'mysql',
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password,
      database: config.database,
      logging: config.loggin,
      sync: {
        alter: config.sync_alter,
        force: config.sync_alter,
      },
    });
    sequelize.addModels([UsersModel]);
    await sequelize.sync();
    return sequelize;
  },
};
