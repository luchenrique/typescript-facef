import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

// Vamos decorar a classe como uma entidade do banco de dados
@Entity(`product`)
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    name: string
    @Column('decimal')
    price: number
    @Column('int')
    quantity: number    
    @CreateDateColumn() // Gera uma data quando um item for criado
    created_at: Date
    @CreateDateColumn() // Gera uma data quando o item for atualizado
    updated_at: Date
}
// permite que classe seja usada fora daqui
export default Product 