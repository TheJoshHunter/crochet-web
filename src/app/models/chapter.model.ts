import { Recipe } from './recipe.model';

export class Chapter {
    apiID?: string;
    title?: string;
    number?: number | null;
    description?: string;
    recipes?: Array<Recipe>;
}
