import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Products";
import ProductRepository from "../typeorm/repositories/ProductRepository";

class ListProductService{

    public async execute():Promise<Product[]> {
        let productReppository = getCustomRepository(ProductRepository)
        let products = await productReppository.find();
        return products
    }
}

export default ListProductService