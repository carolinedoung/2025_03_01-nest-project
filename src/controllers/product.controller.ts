import { Body, Controller, HttpCode, Put } from '@nestjs/common';
import { IProductDTO } from 'src/dto/product.dto';
import ProductService from 'src/services/product.service';
import { Product } from 'src/schemas/product.schema';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Put()
  @HttpCode(201)
  async createProduct(@Body() requestProduct: IProductDTO): Promise<Product> {
    return this.productService.createProduct(requestProduct);
  }
}
