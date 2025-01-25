import { Patient } from '../patient/patient.entity';
import { Doctor } from '../doctor/doctor.entity';
export declare class Appointment {
    id: number;
    patient: Patient;
    doctor: Doctor;
    appointmentTime: Date;
    status: string;
}
