import User from 'src/modules/user/entities/user.entity';

export interface LoginResponseInterface {
  message: string;
  accessToken: string;
  user: User;
}
