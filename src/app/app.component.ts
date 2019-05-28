import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';

  posts=[{
          title:"Mon premier post",
          content:"c'est mon premier post pour l'apprentissage d'angular",
          loveIts:2,
          create_at:new Date()
       },
       {
        title:"Mon deuxième post",
        content:"angular est une language dynamique",
        loveIts:5,
        create_at:new Date()
     },
     {
      title:"Mon troisième post",
      content:"angular est utiliser dans plusieur entreprise pour construire des sites web dynamique en parallèle avec java ee",
      loveIts:-2,
      create_at:new Date()
   }];
   
}
