import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class GeneratorService {
  public uuid() {
    return crypto.randomUUID();
  }
}
