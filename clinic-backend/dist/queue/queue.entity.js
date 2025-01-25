"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
const typeorm_1 = require("typeorm");
const patient_entity_1 = require("../patient/patient.entity");
let Queue = class Queue {
};
exports.Queue = Queue;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Queue.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient),
    __metadata("design:type", patient_entity_1.Patient)
], Queue.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Queue.prototype, "queueNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Queue.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Queue.prototype, "priority", void 0);
exports.Queue = Queue = __decorate([
    (0, typeorm_1.Entity)()
], Queue);
//# sourceMappingURL=queue.entity.js.map