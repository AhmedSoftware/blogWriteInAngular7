import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostlistitemComponent } from './postlistitem/postlistitem.component';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';
import { PostService } from './services/post.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Routes, Router, RouterModule } from '@angular/router';

const appRoutes:Routes=[
  {path:'posts',component:PostListComponent},
  {path:'newPost',component:NewPostComponentComponent},
  {path:'',component:PostListComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostlistitemComponent,
    NewPostComponentComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
