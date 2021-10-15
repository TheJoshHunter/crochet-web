import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { CategoryComponent } from './components/category/category.component';
import { NotFoundComponent } from './components/notfound/notfound.component';

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
    // GraphQLModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
