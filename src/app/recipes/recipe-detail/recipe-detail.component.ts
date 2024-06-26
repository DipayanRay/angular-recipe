import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {

    // @Input() recipe: Recipe;
    id: number;
    recipe: Recipe;

    constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router)
    {
      
    }

    ngOnInit()
    {
      // const id = this.route.snapshot.params['id'];
      this.route.params.subscribe((params: Params) => { this.id = +params['id']; this.recipe = this.recipeService.getRecipe(this.id);})
    }

    onAddToShoppingList()
    {
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }

    onEditRecipe()
    {
      // this.router.navigate(['edit'], {relativeTo: this.route});
      this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    }

    onDeleteRecipe() 
    {
      this.recipeService.deleteRecipe(this.id);       
      this.router.navigate(['/recipes']);
    }
}
