import { NgModule } from '@angular/core';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component'
import { CommonModule } from '@angular/common';
import { ShoppingRoute } from 'src/app/shopping-list/shopping-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule(
    {
        declarations:[
            ShoppingListComponent,
            ShoppingEditComponent,
        ],
        imports:[
         CommonModule,
         ShoppingRoute,
         FormsModule
        ]
    }
)
export class ShoppingModule
{

}