import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from './post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})


export class PostlistitemComponent implements OnInit{
  

  constructor(private postService:PostService) { }
  
  @Input("post")
  post:Post;

  @Input("index")
  index:number;


  ngOnInit() {
  }
  /**
   * love a content
   */
  onLoveit(){
   this.postService.onLoveit(this.index);
  }
  /**
   * DO not love a content
   */
  onDontLoveit(){
   this.postService.onDontLoveit(this.index);
  }

  /**
   * delete a content
   */
  onDeletePost(){
    if(confirm("Voulez-vous vraimement supprimer ce post ?")){
      this.postService.onDelete(this.index);
    }
  }
}
