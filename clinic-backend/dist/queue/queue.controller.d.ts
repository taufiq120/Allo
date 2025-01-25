import { QueueService } from './queue.service';
export declare class QueueController {
    private readonly queueService;
    constructor(queueService: QueueService);
    getAllQueues(): Promise<import("./queue.entity").Queue[]>;
}
