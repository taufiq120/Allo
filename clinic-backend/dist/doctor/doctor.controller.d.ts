import { DoctorService } from './doctor.service';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    getAllDoctors(): Promise<import("./doctor.entity").Doctor[]>;
}
