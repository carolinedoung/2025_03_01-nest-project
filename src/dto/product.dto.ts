import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class IProductDTO {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    uuid?: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsNotEmpty()
    categoryId: number;
}