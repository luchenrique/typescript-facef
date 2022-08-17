import { EntityRepository, Repository } from "typeorm"
import Product from "../../entities/Products"

//vamos herdar os métodos de CRUD
@EntityRepository(Product)
class ProductRepository extends Repository<Product>{
    // herdmaos os métodos CRUD, mas podemos criar novos métodos
    // procura pelo nome do produto 
    // método assincrono
    public async findByName(name: string): Promise<Product | null>{
        // awair - aguardar/esperar pelo resultado da busca
        let product = await this.findOne({
            where: {
                name
            }
        })
        return product
    }
}
// exporta para ser usado em outra classe
export default ProductRepository

