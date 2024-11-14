import express from 'express'
import productRouter from './productsRoutes';
import usersRouter from './usersRouter';
import { catalogsRouter } from './catalogsRouter';
import { validateProductData } from '@/middlewares/validateProductData';
import { validateCatalogData } from '@/middlewares/validateCatalogData';


const routes = express.Router()

routes.use('/product', validateProductData, productRouter);
routes.use('/user', usersRouter);
routes.use('/catalog',validateCatalogData, catalogsRouter)
export {routes};