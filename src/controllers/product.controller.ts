import { Body, Controller, Delete, HttpCode, Put } from '@nestjs/common';
import { ProductDTO, updateProductDTO } from 'src/dto/product.dto';
import ProductService from 'src/services/product.service';
import { Product } from 'src/schemas/product.schema';
import { IProduct } from 'src/models/product.model';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Put('/create')
  @HttpCode(201)
  async createProduct(@Body() dataProduct: ProductDTO): Promise<Product> {
    return this.productService.createProduct(dataProduct);
  }

  @Delete()
  @HttpCode(200)
  async deleteProduct(@Body('id') idProduct: IProduct['id']): Promise<Product> {
    return this.productService.deleteProduct(idProduct);
  }

  @Put('/update')
  async updateProduct(@Body() dataProduct: updateProductDTO): Promise<Product> {
    return this.productService.updateProduct(dataProduct);
  }
}
