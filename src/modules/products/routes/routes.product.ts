import { Router } from "express";
import { deflate } from "zlib";
import ProductController from "../controllers/ProductController";

// cria objeto para a rota
const routerProduct = Router()
//cria um objeto controller
const controllerProduct = new ProductController()

// Está criada a rota para inserir um produto no banco de dados
routerProduct.post('/', controllerProduct.create)

routerProduct.post('/', controllerProduct.list)

export default routerProduct