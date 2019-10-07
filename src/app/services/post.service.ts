import { Subject } from 'rxjs';
import { Post } from '../postlistitem/post.model';

export class PostService{

    postsSubject = new Subject<Post[]>();

    private posts=[
        {
        id:1,    
        title:"Mon premier post",
        content:"c'est mon premier post pour l'apprentissage d'angular",
        loveIts:1,
        create_at:new Date()
       },
     {
      id:2,   
      title:"Mon deuxième post",
      content:"angular est une language dynamique",
      loveIts:-1,
      create_at:new Date()
   },
   {
    id:3,   
    title:"Mon troisième post",
    content:"angular est utiliser dans plusieur entreprise pour construire des sites web dynamique en parallèle avec java ee",
    loveIts:0,
    create_at:new Date()
 }];

 emitPostSubject(){
     this.postsSubject.next(this.posts.slice());
 }

 onDelete(index:number){
     this.posts.splice(index,1);
     this.emitPostSubject();
 }

 onAdd(post:Post){
     this.posts.push(post);
     this.emitPostSubject();
 }

 onLoveit(index:number){
     this.posts[index].loveIts++;
     this.emitPostSubject;
  }
  onDontLoveit(index:number){
      this.posts[index].loveIts--;
      this.emitPostSubject;
  }



}