import { HttpException, HttpStatus } from '@nestjs/common';

export class PlaceNotFoundException extends HttpException {
  constructor() {
    super('PlaceNotFound', HttpStatus.NOT_FOUND);
  }
}
