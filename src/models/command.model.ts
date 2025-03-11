import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class sellerEntity {
    
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    userId: string;

    @Column()
    invoiceId: string;

    @Column()
    creationDate: Date;

    @Column()
    price: number;

    @Column()
    status: string;

    @Column()
    product: Array<IProduct>;
}

interface IProduct {
    id: string,
    qty: number,
    totalprice: number
}