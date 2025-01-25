import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './doctor.entity';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor])], // Register the Doctor entity
  controllers: [DoctorController], // Register the DoctorController
  providers: [DoctorService], // Register the DoctorService
})
export class DoctorModule {}