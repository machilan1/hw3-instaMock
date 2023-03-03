import { Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { MessageSectionComponent } from "./message-section/message-section.component";
import { FeedSectionComponent } from "./feed-section/feed-section.component";
export const routes:Routes=[
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomepageComponent},
    {path:'messages',component:MessageSectionComponent},
    {path:'feeds',component:FeedSectionComponent},
    {path:'**',component:HomepageComponent}
    

]