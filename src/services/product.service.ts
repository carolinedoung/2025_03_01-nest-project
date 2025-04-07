import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Error, Model } from 'mongoose';
import { ProductDTO, updateProductDTO } from 'src/dto/product.dto';
import { IProduct } from 'src/models/product.model';
import { Product } from 'src/schemas/product.schema';

@Injectable()
export default class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async createProduct(product: ProductDTO): Promise<Product> {
    const newProduct = new this.productModel({
      ...product,
      uuid: 'EDSG79UHGT', // Générer un UUID si nécessaire
    });
    return newProduct.save();
  }

  async deleteProduct(idProduct: IProduct['id']): Promise<Product> {
    try {
      if (!idProduct) {
        throw new BadRequestException('Product ID is required');
      }

      const deleteProduct =
        await this.productModel.findByIdAndDelete(idProduct);

      if (!deleteProduct) {
        throw new NotFoundException('Product ID Not Found');
      }

      return deleteProduct;
    } catch (error) {
      if (error instanceof Error.CastError) {
        throw new BadRequestException('Invalid ID format');
      }
      throw error; // Re-throw other unexpected errors
    }
  }

  async updateProduct(dataProduct: updateProductDTO): Promise<Product> {
    try {
      await this.productModel.findByIdAndUpdate(
        dataProduct.id,
        dataProduct.data,
      );
      const updatedProduct = await this.productModel.findOne({
        _id: dataProduct.id,
      });
      return updatedProduct;
    } catch (error) {
      console.log(error);
    }
  }
}
