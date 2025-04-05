import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProductDTO } from 'src/dto/product.dto';
import { Product } from 'src/schemas/product.schema';

@Injectable()
export default class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async createProduct(product: IProductDTO): Promise<Product> {
    const newProduct = new this.productModel({
      ...product,
      uuid: 'EDSG79UHGT', // Générer un UUID si nécessaire
    });
    return newProduct.save();
  }
}
