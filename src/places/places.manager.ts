import { FetcherService } from './services/fetcher.service';
import { PlaceRequestDto } from './interfaces/dto/place.request.dto';
import { PlacesManagerContract } from './interfaces/places.manager.contract';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlacesManager implements PlacesManagerContract {
  constructor(private readonly fetcherService: FetcherService) {}
  /**
   * Get near restaurants
   * @param req PlaceRequestDto
   */
  getRestaurantsByCoordinates(req: PlaceRequestDto) {
    return this.fetcherService.getNearPlaces(req);
  }
}
