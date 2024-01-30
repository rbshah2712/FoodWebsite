import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags:Tag[] = [];
  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  constructor(private foodservice:FoodService){

  }
  ngOnInit(): void {
    if(!this.foodPageTags)
      this.tags = this.foodservice.getAllTags();
  }
  
}
