import { Patient } from '../patient/patient.entity';
export declare class Queue {
    id: number;
    patient: Patient;
    queueNumber: number;
    status: string;
    priority: string;
}
