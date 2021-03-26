import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable() 
export class RecipeService{

    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Burger', 'Burger with French Fry with butter', 
        'https://www.kcet.org/sites/kl/files/atoms/article_atoms/www.kcet.org/living/food/assets/images/burgerbacon.jpg',
        [new Ingredient('Bun', 1),
         new Ingredient('French Fry', 10),
        ]),


        new Recipe('Fruit Salad', 'Mix Healthy Salad', 'https://live.staticflickr.com/5737/30622968353_35e06fcb52_b.jpg',
        [new Ingredient('Apples', 2),
        new Ingredient('Kiwi', 1),
        new Ingredient('Pomegranate', 1)])];

   // private recipes: Recipe[] = [];

    constructor(private slService: ShoppingListService){}
    
    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
    
    getRecipes(){
       return this.recipes.slice();
    }

    getRecipeById(index: number){
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());

    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
  

}