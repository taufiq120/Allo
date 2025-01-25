import { Controller, Get } from '@nestjs/common';
import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  getAllPatients() {
    return this.patientService.getAllPatients();
  }
}