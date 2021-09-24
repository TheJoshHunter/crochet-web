import { Author } from './author.model';
import { Chapter } from './chapter.model';
import { Recipe } from './recipe.model';

export class Cookbook {
    apiID?: string;
    title?: string;
    description?: string;
    authors?: Array<Author>;
    chapters?: Array<Chapter>;
    featuredRecipe?: Recipe;
    published?: boolean;
    creationDate?: Date;
    publishDate?: Date;
    modifedDate?: Date;

}
