import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Shnitzel',
      imageUrl: 'https://en.wikipedia.org/wiki/Schnitzel#/media/File:Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients: ['mashed potato', 'ketchup', 'Pork meat', 'salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://en.wikipedia.org/wiki/Spaghetti_alla_puttanesca#/media/File:Pasta_Puttanesca.jpg',
      ingredients: ['spaghetti', 'tomato paste', 'olives', 'parsley']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id !== recipeId;
    })
  };
}

deleteRecipe(recipeId: string) {
  this.recipes = this.recipes.filter(recipe => {
    return recipe.id !== recipeId;
  });
}
}
