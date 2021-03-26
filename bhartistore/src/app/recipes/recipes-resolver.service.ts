
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Recipe } from './recipe.model';
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeService } from './recipe.service';

@Injectable({
    providedIn: 'root'
})

//ingore this error as id not understanding this
export class RecipesResolverService implements Resolve<Recipe[]>{ 

    constructor(private dataStorageService: DataStorageService,  private recipeService: RecipeService){}
    
    //We are not subscribe here because resolver angular feature subscribe automatically
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const recipes = this.recipeService.getRecipes();
        if(recipes.length === 0){
            return this.dataStorageService.fetchRecipes();
        }else{
            return recipes;
        }
       
    }

}