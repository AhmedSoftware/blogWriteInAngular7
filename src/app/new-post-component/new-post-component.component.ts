import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../postlistitem/post.model';
import { PostService } from '../services/post.service';
import {Router } from '@angular/router'




@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.scss']
})
export class NewPostComponentComponent implements OnInit {
  constructor(private postService:PostService, private router:Router) { }
  post:Post;
  
  ngOnInit() {
  }

  onSubmitPost(newPost:NgForm){
    if(newPost.valid){
      this.post=newPost.value;
      this.post.loveIts=0;
      this.post.create_at= new Date();
      this.postService.onAdd(this.post);
      this.router.navigate(['/posts']);
    }

  }

}
