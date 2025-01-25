import { PatientService } from './patient.service';
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    getAllPatients(): Promise<import("./patient.entity").Patient[]>;
}
