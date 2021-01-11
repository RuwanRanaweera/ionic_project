import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {

    id: 'a1',
    title: 'Fried Rice',
    imageUrl: 'https://media4.s-nbcnews.com/i/newscms/2019_13/1420420/sam-sifton-today-main-190326_1e82c491675199fef7d2d7db1b67d05c.jpg',
    ingredients: ['dsdsd', 'dsds',  'daddadsd']
  },

  {

    id: 'r1',
    title: 'Rice And Curry',
    imageUrl: 'https://w4c9m4f2.stackpathcdn.com/wp-content/uploads/2020/02/Sri-Lankan-Rice-and-Curry.jpg',
    ingredients: ['sds', 'dadddsd']
  }
];
  constructor() {}
  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
