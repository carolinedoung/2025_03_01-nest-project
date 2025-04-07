import { Injectable } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Injectable()
export class ProductModel {
  private database = {};

  constructor() {}

  async createProduct(): Promise<void> {}
}

export interface IProduct {
  id: string;
  qty: number;
  price: number;
}

@Entity()
export class productEntity implements IProduct {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  sellerId: string;

  @Column()
  name: string;

  @Column()
  qty: number;

  @Column()
  price: number;

  @Column()
  tax: number;

  @Column()
  description: string;

  @Column()
  minimumAge: number;
}
