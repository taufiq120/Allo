import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Doctor } from './doctor/doctor.entity';
import { Patient } from './patient/patient.entity';
import { Appointment } from './appointment/appointment.entity';
import { Queue } from './queue/queue.entity';
import { UserModule } from './user/user.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { AppointmentModule } from './appointment/appointment.module';
import { QueueModule } from './queue/queue.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // No password (or your actual password)
      database: 'clinic_db',
      entities: [User, Doctor, Patient, Appointment, Queue],
      synchronize: true,
    }),
    UserModule,
    DoctorModule,
    PatientModule,
    AppointmentModule,
    QueueModule,
    AuthModule, // Add AuthModule here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}