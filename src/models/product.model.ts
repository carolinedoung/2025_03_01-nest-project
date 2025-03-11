import { Injectable } from "@nestjs/common";
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Injectable()
export class ProductModel {
    private database = {}

    constructor(){
    }

    async createProduct(): Promise<void>{

    }
}

@Entity()
export class productEntity {
    
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    sellerId: string;

    @Column()
    name: string;

    @Column()
    qty: number

    @Column()
    price: number;

    @Column()
    tax: number;

    @Column()
    description: string;

    @Column()
    minimumAge: number;
}