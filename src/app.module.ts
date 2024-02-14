import { Module } from '@nestjs/common';
import { DetectorModule } from './detector/detector.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), DetectorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
