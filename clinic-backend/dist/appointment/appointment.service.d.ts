import { Repository } from 'typeorm';
import { Appointment } from './appointment.entity';
export declare class AppointmentService {
    private appointmentRepository;
    constructor(appointmentRepository: Repository<Appointment>);
    getAllAppointments(): Promise<Appointment[]>;
}
