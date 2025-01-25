import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Patient } from '../patient/patient.entity';
import { Doctor } from '../doctor/doctor.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patient)
  patient: Patient;

  @ManyToOne(() => Doctor)
  doctor: Doctor;

  @Column()
  appointmentTime: Date;

  @Column()
  status: string; // e.g., "booked", "completed", "canceled"
}