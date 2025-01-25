import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Patient } from '../patient/patient.entity';

@Entity()
export class Queue {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patient)
  patient: Patient;

  @Column()
  queueNumber: number;

  @Column()
  status: string; // e.g., "waiting", "with_doctor", "completed"

  @Column()
  priority: string; // e.g., "normal", "urgent"
}