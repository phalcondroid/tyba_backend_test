import { Injectable } from '@nestjs/common';

@Injectable()
export class PlaceConfig {
  get googleKey(): string {
    return process.env.GOOGLE_KEY;
  }

  get placeUrl(): string {
    return process.env.PLACE_URL;
  }
}
