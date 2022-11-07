import { EBrand } from "./productBrand.enum";

export interface IProduct {
	id: number;
	name: string;
	brand: EBrand;
    imageUrl: string;
    description: string;
    price: number;
}