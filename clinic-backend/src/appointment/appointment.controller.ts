import { Controller, Get } from '@nestjs/common';
import { AppointmentService } from './appointment.service';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get()
  getAllAppointments() {
    return this.appointmentService.getAllAppointments();
  }
}