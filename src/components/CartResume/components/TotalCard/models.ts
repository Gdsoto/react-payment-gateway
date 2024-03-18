import { ProductI } from '../../models';

export interface TotalCardI {
  products: ProductI[];
  onPayAction?: () => void;
}
