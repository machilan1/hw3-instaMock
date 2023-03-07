import { Routes } from "@angular/router";
import { HomepageComponent } from "./page-homepage/homepage.component";
import { MessageSectionComponent } from "./page-messenger/message-section.component";
import { FeedSectionComponent } from "./page-user-feed/feed-section.component";
// export const routes:Routes=[
//     {path:'', redirectTo:'home',pathMatch:'full'},
//     { path:'home',component :HomepageComponent},
//     {path:'message',component :MessageSectionComponent},
//     {path:'feed',component :FeedSectionComponent},
//     {path:'**',component :HomepageComponent}
//     ]
export const routes:Routes=[
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home',loadComponent: () => import('./page-homepage/homepage.component').then(m => m.HomepageComponent)},
    {path:'home/:commentsActive/:postID',loadComponent: () => import('./page-homepage/homepage.component').then(m => m.HomepageComponent)},
    {path:'message',loadComponent: () => import('./page-messenger/message-section.component').then(m => m.MessageSectionComponent)},
    {path:'feed/:userID',loadComponent: () => import('./page-user-feed/feed-section.component').then(m => m.FeedSectionComponent)},
    {path:'**',loadComponent: () => import('./page-homepage/homepage.component').then(m => m.HomepageComponent)}
    ]