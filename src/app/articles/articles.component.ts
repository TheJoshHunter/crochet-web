import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import ARTICLES_QUERY from "../apollo/queries/articles";
import { Subscription } from "rxjs";
import { environment } from '../../environments/environment'

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

  constructor(private apollo: Apollo) { }

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
