import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from "./auth/auth.service";
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { DataStorageService } from "./shared/data-storage.service";
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthGaurd } from './auth/auth.gaurd';

@NgModule({
    providers: [RecipeService, ShoppingListService, DataStorageService, AuthGaurd, AuthService,
        {
          provide: HTTP_INTERCEPTORS, 
          useClass: AuthInterceptorService,
          multi: true
        }]
})
export class CoreModule {}