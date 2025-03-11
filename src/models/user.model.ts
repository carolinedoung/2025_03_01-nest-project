import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class userEntity {
    
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    adresse: string;

    @Column()
    phone?: string;

    @Column()
    birthDate: Date;
}