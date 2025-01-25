import { Repository } from 'typeorm';
import { Doctor } from './doctor.entity';
export declare class DoctorService {
    private doctorRepository;
    constructor(doctorRepository: Repository<Doctor>);
    getAllDoctors(): Promise<Doctor[]>;
}
