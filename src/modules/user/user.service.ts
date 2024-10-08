import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/user.dto';
import User from './entities/user.entity';
import { InvitedEmail } from './entities/userInvite.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    @InjectModel(InvitedEmail)
    private readonly userInvitedModel: typeof InvitedEmail,
  ) {}

  async isEmailInvited(email: string): Promise<boolean> {
    const invitedEmail = await this.userInvitedModel.findOne({
      where: { email },
    });
    return !!invitedEmail; // Retorna true se o email foi convidado, false caso contrário
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = createUserDto.name;
    user.password = createUserDto.password;
    user.email = createUserDto.email;

    return user.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ where: { email } });
  }

  async inviteUser(email: string): Promise<any> {
    // Verificar se o email já foi convidado
    const existingInvite = await this.userInvitedModel.findOne({
      where: { email },
    });

    if (existingInvite) {
      throw new BadRequestException('Este email já foi convidado.');
    }

    // Salvar o novo convite no banco de dados
    await this.userInvitedModel.create({ email });

    // Aqui você poderia, opcionalmente, enviar um email com o convite

    return {
      success: true,
      message: 'Usuário convidado com sucesso!',
      data: {
        email,
        invitedAt: new Date().toISOString(),
      },
    };
  }
}
