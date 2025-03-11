import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class sellerEntity {
    
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    companyName: string;

    @Column()
    email: string;

    @Column()
    adresse: string;

    @Column()
    phone: string;

    @Column()
    contactName: string;

    @Column()
    siret: string;

    @Column()
    productTypeId: string;
}