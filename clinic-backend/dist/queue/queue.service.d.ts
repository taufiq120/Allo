import { Repository } from 'typeorm';
import { Queue } from './queue.entity';
export declare class QueueService {
    private queueRepository;
    constructor(queueRepository: Repository<Queue>);
    getAllQueues(): Promise<Queue[]>;
}
