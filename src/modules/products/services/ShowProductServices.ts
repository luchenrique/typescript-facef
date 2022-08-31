import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Products";
import ProductRepository from "../typeorm/repositories/ProductRepository";

interface IRequest {
    id:string
}
class ShowProductService {
    public async execute({id}:IRequest):Promise<Product>{
        let productReppository = getCustomRepository(ProductRepository)
        let product = await productReppository.findOne(id)
        if(!product) {
            throw new AppError('Produto não existe')
        }
        return product
    }
}