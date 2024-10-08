import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import User from '../user/entities/user.entity';
import { LoginResponseInterface } from './interfaces/auth';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User): Promise<LoginResponseInterface> {
    const { email, password } = user;
    const hasUser = await this.userService.findByEmail(email);
    if (!hasUser) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = {
      email: user.email,
      userId: user.id,
      name: user.name,
    };

    return {
      message: 'Login realizado com sucesso!',
      accessToken: this.jwtService.sign(payload),
      user: hasUser,
    };
  }

  async register(registerDto: RegisterDto): Promise<User> {
    const isInvited = await this.userService.isEmailInvited(registerDto.email);
    if (!isInvited) {
      throw new UnauthorizedException(
        'Você não tem permissão para se cadastrar, entre em contato com um administrador.',
      );
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    return this.userService.createUser({
      ...registerDto,
      password: hashedPassword,
    });
  }
}
