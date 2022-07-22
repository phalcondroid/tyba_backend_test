import { Sequelize } from 'sequelize-typescript';
import { DatabaseConfig } from '../config/database.config';
import { UsersModel } from '../../users/models/entities/users.model';

export const DatabaseProvider = {
  provide: 'SEQUELIZE',
  inject: [DatabaseConfig],
  useFactory: async (config: DatabaseConfig) => {
    console.log(config);
    let sequelize = new Sequelize({
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

    if (process.env.NODE_ENV == 'test') {
      sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './sqlite3',
        logging: false,
      });
    }
    sequelize.addModels([UsersModel]);
    await sequelize.sync();
    return sequelize;
  },
};
