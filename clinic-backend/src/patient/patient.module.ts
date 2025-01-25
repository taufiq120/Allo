import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './patient.entity';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])], // Register the Patient entity
  controllers: [PatientController], // Register the PatientController
  providers: [PatientService], // Register the PatientService
})
export class PatientModule {}