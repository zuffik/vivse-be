import {
  DynamicModule,
  FactoryProvider,
  Module,
  Provider,
  ValueProvider,
} from '@nestjs/common';
import { AwsService } from './aws.service';
import { AWS_CONFIG_KEY, AwsConfig } from './aws.config';
import { UtilsModule } from '../../utils/utils.module';

@Module({
  imports: [UtilsModule],
  providers: [AwsService],
  exports: [AwsService],
})
export class AwsModule {
  static forRootAsync(
    provider: Partial<
      Omit<FactoryProvider<AwsConfig> & ValueProvider<AwsConfig>, 'provide'>
    >,
  ): DynamicModule {
    return {
      module: AwsModule,
      providers: [
        {
          provide: AWS_CONFIG_KEY,
          ...provider,
        } as Provider<AwsConfig>,
      ],
    };
  }

  static forRoot(config: AwsConfig): DynamicModule {
    return AwsModule.forRootAsync({
      useValue: config,
    });
  }
}
