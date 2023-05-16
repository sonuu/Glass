import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {DefineIndexSchemaComponent} from './define-index-schema/define-index-schema.component'
import {LoadSampleDataComponent} from './load-sample-data/load-sample-data.component';
import { SearchIndexDataComponent } from './search-index-data/search-index-data.component';
//import { authGuard } from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
  { path: 'defineIndexSchema', component: DefineIndexSchemaComponent },
  { path: 'loadSampleData', component: LoadSampleDataComponent },
  { path: 'searchIndexData', component: SearchIndexDataComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
