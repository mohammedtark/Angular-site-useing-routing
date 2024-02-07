import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartFrameworkComponent } from './start-framework/start-framework.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'startFramework', pathMatch: 'full' },
  { path: 'startFramework', component: StartFrameworkComponent, title: 'home' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'portfolio', component: PortfolioComponent, title: 'portfolio' },
  { path: 'contact', component: ContactComponent, title: 'contact' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
