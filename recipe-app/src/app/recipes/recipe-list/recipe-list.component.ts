import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://static01.nyt.com/images/2022/05/05/dining/rm-tajin-grilled-chicken-copy/merlin_206068182_ffd1a522-033b-4519-969f-1990ecb8a8f0-videoSixteenByNine3000.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
