import configureMeasurements, { mass, volume, length } from 'convert-units';
import { Unit } from 'convert-units';
import { Author } from './author.model';
import { Chapter } from './chapter.model';
import { Cookbook } from './cookbook.model';
import { Ingredient } from './ingredient.model';


// const convert = configureMeasurements({
//     mass,
//     volume,
//     length,
// });

export class Recipe {
    apiID?: string;
    title?: string;
    author?: Array<Author>;
    cookbook?: Cookbook;
    chapter?: Chapter;
    yieldQuantity?: number;
    yieldUnit?: string;
    instructions?: Array<string>;
    ingredients?: Array<Ingredient>;
    variants?: Array<Recipe>;
    scalingGlobalOverride?: boolean;

    // public scaleIngredients(scaleFactor: number, ingredients: Array<Ingredient>): Array<Ingredient> | undefined {
    //     if (this.scalingGlobalOverride) {
    //         return ingredients;
    //     }
    //     let m = ingredients.length;
    //     let newIngredients: Array<Ingredient>
    //     for (let i = 0; i < m; i++) {
    //         newIngredients[i].quantity = convert(ingredients[i].quantity).from(ingredients[i].unit as Unit).toBest()
    //     }
    //     return newIngredients;
    // }
}
