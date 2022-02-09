import { Module } from '@nestjs/common';
import { GeneratorService } from './generator/generator.service';

@Module({
  providers: [GeneratorService],
  exports: [GeneratorService],
})
export class UtilsModule {}
