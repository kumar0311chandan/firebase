

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';


@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    //As only one routing component so handing here only. if we have multiple like recipes component then 
    //we need to create a seperate routing module file like RecipesRoutingModule
    imports: [
        FormsModule, 
        RouterModule.forChild([{path: '', component: ShoppingListComponent}]),
        SharedModule
    ],
        
    exports: [],
    providers: [],
})

export class ShoppingListModule {}