import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import ARTICLES_QUERY from "../apollo/queries/articles";
import { Subscription } from "rxjs";
import { environment } from '../../environments/environment'
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  envURL: any = environment.strapiURL;
  data: any = {};
  loading = true;
  errors: any;
  leftArticlesCount: any;
  leftArticles!: any[];
  rightArticles!: any[];

  private queryArticles!: Subscription;

  constructor(private apollo: Apollo, private title: Title, private meta: Meta) {
    this.meta.addTags([
        {name: 'robots', content: 'noindex, nofollow'},
        {name: 'description', content: 'Home page for Cookbook app'},
        {name: 'author', content: 'Joshua Hunter'},
        {name: 'generator', content: 'Crochet Client v0.0.0'},
        {name: 'date', content: "2021-09-07", scheme: 'YYYY-MM-DD'},
        {charset: 'UTF-8'}
    ]);
    this.setTitle('Home - Cookbook');
   }

  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }


  ngOnInit(): void {
    this.queryArticles = this.apollo
    .watchQuery({query: ARTICLES_QUERY})
    .valueChanges.subscribe( result => {
        this.data = result.data;
        this.leftArticlesCount = Math.ceil(this.data.articles.length / 5);
        this.leftArticles = this.data.articles.slice(0, this.leftArticlesCount);
        this.rightArticles = this.data.articles.slice(
          this.leftArticlesCount, this.data.articles.length);
        this.loading = result.loading;
        this.errors = result.errors;
    });
  }
  ngOnDestroy() {
    this.queryArticles.unsubscribe();
  }
}
