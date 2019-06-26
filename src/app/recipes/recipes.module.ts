import { NgModule } from '@angular/core';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from '../recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeRoutingModule } from 'src/app/recipes/recipe-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule(
    {
        declarations:[
            RecipesComponent,
            RecipeListComponent,
            RecipeDetailComponent,
            RecipeItemComponent,
          
            RecipeStartComponent,
            RecipeEditComponent,
        ],
        imports:[
            CommonModule,
            ReactiveFormsModule,
            RecipeRoutingModule,
            SharedModule
        ]
    }
)

export class RecipeModule
{

}