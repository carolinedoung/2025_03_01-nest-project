import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { plainToInstance } from 'class-transformer';
import { Error, Model } from 'mongoose';
import { ProductDTO, updateProductDataDTO } from 'src/dto/product.dto';
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

  async updateProduct(
    id: IProduct['id'],
    dataProduct: updateProductDataDTO,
  ): Promise<Product> {
    try {
      // // ===== Tech 3 =====
      // const instanceUpdateData = plainToInstance(
      //   updateProductDataDTO,
      //   dataProduct,
      //   {
      //     excludeExtraneousValues: true,
      //   },
      // );

      // // ===== Tech 1 =====
      // const instanceUpdateData: updateProductDataDTO = {
      //   ...dataProduct,
      //   category: undefined,
      // };

      // ===== Tech 2 ===== ( mieux point de vue sécurité car on ne garde que les champs nécessaire)
      const instanceUpdateData: updateProductDataDTO = Object.entries(
        dataProduct,
      )
        .filter(([k]: Array<string>) =>
          ['name', 'description'].includes(k.trim().toLowerCase()),
        )
        .reduce(
          (acc, [k, v]: Array<string>) => ({ ...acc, [k]: v }),
          {} as ProductDTO,
        );

      await this.productModel.findByIdAndUpdate(id, instanceUpdateData);
      const updatedProduct = await this.productModel.findOne({
        _id: id,
      });
      return updatedProduct;
    } catch (error) {
      console.log(error);
    }
  }

  async getProduct(id: IProduct['id']): Promise<Product> {
    const product = await this.productModel.findById(id);

    if (!product) {
      throw new NotFoundException();
    }

    return product;
  }

  async getProducts(): Promise<Array<Product>> {
    const product = await this.productModel.find();
    // const product = await this.productModel.find({}, { price: 0 });
    // const product = await this.productModel.find({}).select('name price');
    // const product = await this.productModel.find({}, 'name price');

    return product;
  }
}
