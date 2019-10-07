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

  onLoveit(){
   this.postService.onLoveit(this.index);
  }
  onDontLoveit(){
   this.postService.onDontLoveit(this.index);
  }

  onDeletePost(){
    if(confirm("Voulez-vous vraimement supprimer ce post ?")){
      this.postService.onDelete(this.index);
    }
  }
}
