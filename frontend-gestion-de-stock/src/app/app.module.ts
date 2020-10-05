import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';
import { ListScategorieComponent } from './scategorie/list-scategorie/list-scategorie.component';
import { AddScategorieComponent } from './scategorie/add-scategorie/add-scategorie.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { AddFourComponent } from './fournisseur/add-four/add-four.component';
import { ListFourComponent } from './fournisseur/list-four/list-four.component';

import {ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { MatDialogModule,MatDialogRef, } from '@angular/material/dialog';
// import { MatSliderModule } from '@angular/material/slider';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { NgMatSearchBarModule } from 'ng-mat-search-bar';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
// const MATERIAL_MODULES = [MatToolbarModule,
//   MatIconModule
// ];
@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ListClientComponent,
    AddCategorieComponent,
    ListCategorieComponent,
    ListScategorieComponent,
    AddScategorieComponent,
    AddArticleComponent,
    ListArticleComponent,
    AddFourComponent,
    ListFourComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // MatDialogModule,
    // MatDialogRef,
    // MatSliderModule,
    // FlexLayoutModule,
    // MatToolbarModule,
    // MatIconModule,
    // NgMatSearchBarModule,
    // NgbModule,
    ToastrModule.forRoot(),
    HttpClientModule,

    
  ],
  // exports : MATERIAL_MODULES,
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [AddCategorieComponent]
})
export class AppModule { }
