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
import {FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component'

const appRoutes:Routes=[
  {path:'posts',component:PostListComponent},
  {path:'newPost',component:NewPostComponentComponent},
  {path:'',component:PostListComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'**',redirectTo: 'not-found'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostlistitemComponent,
    NewPostComponentComponent,
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
