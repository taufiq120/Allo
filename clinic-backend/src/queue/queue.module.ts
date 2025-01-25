import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Queue } from './queue.entity';
import { QueueController } from './queue.controller';
import { QueueService } from './queue.service';

@Module({
  imports: [TypeOrmModule.forFeature([Queue])], // Register the Queue entity
  controllers: [QueueController], // Register the QueueController
  providers: [QueueService], // Register the QueueService
})
export class QueueModule {}