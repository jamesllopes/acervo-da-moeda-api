import {
  Column,
  Model,
  Table,
  PrimaryKey,
  IsEmail,
  Unique,
  DataType,
} from 'sequelize-typescript';

@Table({
  tableName: 'invitedUsers', // Nome da tabela
  timestamps: true, // Para incluir automaticamente createdAt e updatedAt
})
export class InvitedEmail extends Model<InvitedEmail> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @IsEmail // Validação para garantir que o campo seja um email
  @Unique // Email único
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;
}
