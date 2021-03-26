import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, tap } from 'rxjs/operators';


import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { ApplicationConstants } from "../shared/application.constant";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {


  constructor(private http: HttpClient, private recipeService: RecipeService) { }
 

  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    return this.http.put(ApplicationConstants.FIREBASE_URL, recipes)
      .subscribe(response => {
        console.log(response);
      });

  }

  fetchRecipes(){
    
      return  this.http.get<Recipe[]>(ApplicationConstants.FIREBASE_URL)
        .pipe(map(recipes =>{
      return recipes.map(recipes =>{
        return {...recipes, ingredients: recipes.ingredients ? recipes.ingredients : []}
      })
    }), tap(recipes =>{
      this.recipeService.setRecipes(recipes);
    }));

  }

}
