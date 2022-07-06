import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { PlaceRequestDto } from '../interfaces/dto/place.request.dto';
import { PlacesManager } from '../places.manager';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesManager: PlacesManager) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  public async getPlace(@Body() req: PlaceRequestDto): Promise<any> {
    return await this.placesManager.getRestaurantsByCoordinates(req);
  }
}
