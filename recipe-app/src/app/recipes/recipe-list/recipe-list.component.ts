import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://media.istockphoto.com/vectors/recipe-book-hand-drawn-cover-vector-illustration-vector-id1185879263?k=20&m=1185879263&s=612x612&w=0&h=Qiw3sY0LiWG4IIKcKQI9fAwAxR81xLmbhRpYpgt3S8I='
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
