import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './appointment.entity';
import { AppointmentController } from './appointment.controller';
import { AppointmentService } from './appointment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment])], // Register the Appointment entity
  controllers: [AppointmentController], // Register the AppointmentController
  providers: [AppointmentService], // Register the AppointmentService
})
export class AppointmentModule {}