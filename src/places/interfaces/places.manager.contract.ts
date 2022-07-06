import { PlaceRequestDto } from './dto/place.request.dto';

export interface PlacesManagerContract {
  getRestaurantsByCoordinates(req: PlaceRequestDto);
}
