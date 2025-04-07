import { Body, Controller, Delete, HttpCode, Put } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';
import ProductService from 'src/services/product.service';
import { Product } from 'src/schemas/product.schema';
import { IProduct } from 'src/models/product.model';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Put()
  @HttpCode(201)
  async createProduct(@Body() requestProduct: ProductDTO): Promise<Product> {
    return this.productService.createProduct(requestProduct);
  }

  @Delete()
  @HttpCode(200)
  async deleteProduct(@Body('id') idProduct: IProduct['id']): Promise<Product> {
    return this.productService.deleteProduct(idProduct);
  }
}
