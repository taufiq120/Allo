import { AppointmentService } from './appointment.service';
export declare class AppointmentController {
    private readonly appointmentService;
    constructor(appointmentService: AppointmentService);
    getAllAppointments(): Promise<import("./appointment.entity").Appointment[]>;
}
