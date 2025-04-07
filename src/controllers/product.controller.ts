import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Put,
} from '@nestjs/common';
import { ProductDTO, updateProductDataDTO } from 'src/dto/product.dto';
import ProductService from 'src/services/product.service';
import { Product } from 'src/schemas/product.schema';
import { IProduct } from 'src/models/product.model';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Put()
  @HttpCode(201)
  async createProduct(@Body() dataProduct: ProductDTO): Promise<Product> {
    return this.productService.createProduct(dataProduct);
  }

  @Delete('id')
  @HttpCode(200)
  async deleteProduct(
    @Param('id') idProduct: IProduct['id'],
  ): Promise<Product> {
    return this.productService.deleteProduct(idProduct);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: IProduct['id'],
    @Body() dataProduct: updateProductDataDTO,
  ): Promise<Product> {
    return this.productService.updateProduct(id, dataProduct);
  }

  @Get(':id')
  async getProduct(@Param('id') id: IProduct['id']): Promise<Product> {
    return this.productService.getProduct(id);
  }

  @Get()
  async getProducts(): Promise<Array<Product>> {
    return this.productService.getProducts();
  }
}
