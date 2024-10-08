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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_entity_1 = require("./entities/user.entity");
const userInvite_entity_1 = require("./entities/userInvite.entity");
let UserService = class UserService {
    constructor(userModel, userInvitedModel) {
        this.userModel = userModel;
        this.userInvitedModel = userInvitedModel;
    }
    async isEmailInvited(email) {
        const invitedEmail = await this.userInvitedModel.findOne({
            where: { email },
        });
        return !!invitedEmail;
    }
    async createUser(createUserDto) {
        const user = new user_entity_1.default();
        user.name = createUserDto.name;
        user.password = createUserDto.password;
        user.email = createUserDto.email;
        return user.save();
    }
    async findAll() {
        return this.userModel.findAll();
    }
    async findByEmail(email) {
        return this.userModel.findOne({ where: { email } });
    }
    async inviteUser(email) {
        const existingInvite = await this.userInvitedModel.findOne({
            where: { email },
        });
        if (existingInvite) {
            throw new common_1.BadRequestException('Este email já foi convidado.');
        }
        await this.userInvitedModel.create({ email });
        return {
            success: true,
            message: 'Usuário convidado com sucesso!',
            data: {
                email,
                invitedAt: new Date().toISOString(),
            },
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_entity_1.default)),
    __param(1, (0, sequelize_1.InjectModel)(userInvite_entity_1.InvitedEmail)),
    __metadata("design:paramtypes", [Object, Object])
], UserService);
//# sourceMappingURL=user.service.js.map