import { Module } from '@nestjs/common';
import { DetectorModule } from './detector/detector.module';

@Module({
  imports: [DetectorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
