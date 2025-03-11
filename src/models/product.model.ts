import { Injectable } from "@nestjs/common";

@Injectable()
export default class ProductModel {
    private database = {}

    constructor(){
    }

    async createProduct(): Promise<void>{

    }
}