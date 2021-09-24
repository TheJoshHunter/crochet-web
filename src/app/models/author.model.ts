import { Cookbook } from "./cookbook.model";
import { Recipe } from "./recipe.model";

export class Author {
    apiID?: string;
    name?: string;
    profilePicture?: string;
    location?: string;
    cookbooksWritten?: Array<Cookbook>;
    recipesWritten?: Array<Recipe>;
    featuredCookbook?: Cookbook;
    featuredRecipe?: Recipe;
    shareSlug?: string;
    joinDate?: Date;
    endorsements?: Array<string>;
}
