import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PlaceConfig } from '../config/place.config';
import { GooglePlaceResponse } from '../interfaces/dto/google-place.response';
import { PlaceRequestDto } from '../interfaces/dto/place.request.dto';
import { map } from 'rxjs';

@Injectable()
export class FetcherService {
  constructor(
    private readonly httpService: HttpService,
    private readonly placeConfig: PlaceConfig,
  ) {}

  public async getNearPlaces(req: PlaceRequestDto) {
    const url =
      this.placeConfig.placeUrl +
      '&keyword=' +
      req.keyword +
      '&location=' +
      req.lat +
      ',' +
      req.lng +
      '&key=' +
      this.placeConfig.googleKey;
    return this.httpService
      .get<AxiosResponse<GooglePlaceResponse>>(url)
      .pipe(map((response) => response.data));
  }
}
