"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user/user.entity");
const doctor_entity_1 = require("./doctor/doctor.entity");
const patient_entity_1 = require("./patient/patient.entity");
const appointment_entity_1 = require("./appointment/appointment.entity");
const queue_entity_1 = require("./queue/queue.entity");
const user_module_1 = require("./user/user.module");
const doctor_module_1 = require("./doctor/doctor.module");
const patient_module_1 = require("./patient/patient.module");
const appointment_module_1 = require("./appointment/appointment.module");
const queue_module_1 = require("./queue/queue.module");
const auth_module_1 = require("./auth/auth.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'clinic_db',
                entities: [user_entity_1.User, doctor_entity_1.Doctor, patient_entity_1.Patient, appointment_entity_1.Appointment, queue_entity_1.Queue],
                synchronize: true,
            }),
            user_module_1.UserModule,
            doctor_module_1.DoctorModule,
            patient_module_1.PatientModule,
            appointment_module_1.AppointmentModule,
            queue_module_1.QueueModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map