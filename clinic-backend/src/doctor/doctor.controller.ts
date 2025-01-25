import { Controller, Get } from '@nestjs/common';
import { DoctorService } from './doctor.service';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get()
  getAllDoctors() {
    return this.doctorService.getAllDoctors();
  }
}