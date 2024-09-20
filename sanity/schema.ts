import { type SchemaTypeDefinition } from 'sanity'
import { products } from './schemas/products'
import { Category } from './schemas/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,Category]
}
