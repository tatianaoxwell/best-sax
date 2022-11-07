import { EBrand } from "./productBrand.enum";
import { ELevel } from "./productLevel.enum";
import { EType } from "./productType.enum";

export interface IProduct {
	id?: number;
	name: string;
	brand: EBrand;
	level: ELevel;
	type: EType;
    imageUrl: string;
    description: string;
    price: number;
}