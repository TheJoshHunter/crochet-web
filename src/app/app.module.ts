import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from "./nav/nav.component";
import { ArticlesComponent } from "./articles/articles.component"
import { ArticleComponent } from "./article/article.component"
import { CategoryComponent } from "./category/category.component";
import { NotFoundComponent } from './notfound/notfound.component';

// const appRoutes: Routes = [
//   { path: "", component: ArticlesComponent },
//   { path: "article/:id", component: ArticleComponent },
//   { path: "category/:id", component: CategoryComponent }
// ];


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    NavComponent,
    ArticleComponent,
    CategoryComponent,
    NotFoundComponent
  ],
  imports: [
    // RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
