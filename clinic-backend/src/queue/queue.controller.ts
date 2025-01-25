import { Controller, Get } from '@nestjs/common';
import { QueueService } from './queue.service';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Get()
  getAllQueues() {
    return this.queueService.getAllQueues();
  }
}