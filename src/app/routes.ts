import { Routes } from "@angular/router";
import { HomepageComponent } from "./page-homepage/homepage.component";
import { MessageSectionComponent } from "./page-messenger/message-section.component";
import { FeedSectionComponent } from "./page-user-feed/feed-section.component";
export const routes:Routes=[
    {path:'', redirectTo:'home',pathMatch:'full'},
    { path:'home',loadComponent: () => import('./page-homepage/homepage.component').then(m => m.HomepageComponent)},
    {path:'message',loadComponent: () => import('./page-messenger/message-section.component').then(m => m.MessageSectionComponent)},
    {path:'feeds',loadComponent: () => import('./page-user-feed/feed-section.component').then(m => m.FeedSectionComponent)},
    {path:'**',loadComponent: () => import('./page-homepage/homepage.component').then(m => m.HomepageComponent)}
    

]