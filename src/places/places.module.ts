import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PlacesManager } from './places.manager';
import { PlaceConfig } from './config/place.config';
import { FetcherService } from './services/fetcher.service';
import { PlacesController } from './controllers/places.controller';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [PlacesController],
  providers: [FetcherService, PlacesManager, PlaceConfig],
  exports: [PlacesManager],
})
export class PlacesModule {}
