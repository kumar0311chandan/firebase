import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private igChangedSub: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
   this.ingredients = this.slService.getIngredients();
   this.igChangedSub = this.slService.ingredientChanged.subscribe(
     (ingredients : Ingredient[]) =>{
       this.ingredients = ingredients;
     }
   );
  }

  onEditItem(index: number){
    console.log(index);
    this.slService.startedEditing.next(index);
  }
  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  ngOnDestroy(){
    this.igChangedSub.unsubscribe();
  }


}
