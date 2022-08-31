import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Products";
import ProductRepository from "../typeorm/repositories/ProductRepository";

// Criando um tipo de dados em TS com interface
interface IRequest{
    name: string;
    quantity: number;
    price: number;
}

class CreateProductService{
    // Criando um método assíncrono que executa a inserção
    // Método precisa prometer que irá retornar um produto
    public async execute({name, quantity, price}: IRequest): Promise<Product>{
        //obter um repositorio de Product
        const productRepository = getCustomRepository(ProductRepository)
        // Criando regra de negocio - consulta produtos com o mesmo nome
        // Regra de negocio dentro de services
        const productExist = await productRepository.findByName(name);
        if (productExist){
            // Criando exceção
            throw new AppError('Já existe um produto com esse nome')
        }
        // vem aqui somente se não tem produto com o nome criado
        const novo = await productRepository.create({
            name, quantity, price
        })
        // Valores salvos no BD
        await productRepository.save(novo)
        return novo
    }
}

export default CreateProductService