import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})


export class PostlistitemComponent implements OnInit {

  constructor() { }
  
  @Input("post")
  post:Post;

  ngOnInit() {
  }

  onLoveit(){
    this.post.loveIts++;
  }
  onDontLoveit(){
    this.post.loveIts--;
   
  }

}
export interface Post{
  title:string;
  content:string;
  loveIts:number;
  created_at: Date;
}
