import { Entity, Column } from 'typeorm';
import { userEntity } from './user.model';

@Entity()
export class sellerEntity extends userEntity {
    
    @Column()
    companyName: string;

    @Column()
    contactName: string;

    @Column()
    siret: string;

    @Column()
    productTypeId: string;
}