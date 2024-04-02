import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French Fries', 20)
  //     ]),
  //   new Recipe('Big Fat Burger',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Meat', 1)
  //     ])
  // ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[])
  {
    this.recipes = recipes;     
    this.recipesChanged.next(this.recipes.slice(0,this.recipes.length));
    // console.log('setRecipes');
    // console.log(this.recipes.slice(0,this.recipes.length));
  }

  getRecipes() 
  {
    // console.log('getRecipes');
    // this.recipes = [...this.recipes];
    console.log(this.recipes); 
    return this.recipes;
  }

  getRecipe(index: number) 
  {
    // console.log('getRecipe'); 
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) 
  {
     
    this.slService.addIngredients(ingredients);
    // console.log('addIngredientsToShoppingList');
    // console.log(this.recipes);
  }

  addRecipe(recipe: Recipe) 
  {    
    this.recipes.push(recipe);
    this.recipes = [...this.recipes];
    this.recipesChanged.next(this.recipes);
    // console.log('addRecipe');
    // console.log(this.recipes);
  }

  updateRecipe(index: number, newRecipe: Recipe) 
  {
    
    this.recipes[index] = newRecipe;
    this.recipes = [...this.recipes];
    this.recipesChanged.next(this.recipes);
    // console.log('updateRecipe'); 
    // console.log(this.recipes);
  }

  deleteRecipe(index: number) 
  {
     
    this.recipes.splice(index, 1); 
    this.recipes = [...this.recipes];      
    this.recipesChanged.next(this.recipes);
    // console.log('deleteRecipe');
    // console.log(this.recipes);
  }
}
