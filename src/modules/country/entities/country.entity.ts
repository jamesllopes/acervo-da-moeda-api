// src/models/Country.ts
import {
  Table,
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  ForeignKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'countries',
  underscored: true,
})
export default class Country extends Model<Country> {
  @Column({
    allowNull: false,
  })
  name: string;

  @Column({
    allowNull: false,
  })
  symbol: string;

  @Column({
    allowNull: false,
  })
  locale: string;

  @Column({
    field: 'createdAt',
  })
  @CreatedAt
  createdAt: Date;

  @Column({
    field: 'updatedAt',
  })
  @UpdatedAt
  updatedAt: Date;
}
