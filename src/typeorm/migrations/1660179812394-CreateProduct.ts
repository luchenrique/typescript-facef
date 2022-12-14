import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProduct1660179812394 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Vamos criar a tabela product
        await queryRunner.createTable(new Table({
            name: 'product',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'price',
                    type: 'decimal'
                },
                {
                    name: 'quantity',
                    type: 'int'
                },
                {
                    name: 'create_at',
                    type: 'timestamp with time zone',
                    default: "now()"
                },
                {
                    name: 'update_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
