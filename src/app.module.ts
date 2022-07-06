import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule, PlacesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
