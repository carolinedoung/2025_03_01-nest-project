import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class ProductDTO {
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

export class updateProductDataDTO {
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsNumber()
  @IsNotEmpty()
  price?: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;
}

export class updateProductDTO {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @Type(() => updateProductDataDTO)
  data: updateProductDataDTO;
}
