import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {MdButtonModule, MdCheckboxModule,MdInputModule,MdSidenavModule,MdIconModule,MdRadioModule,MdDatepickerModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ActionButtonComponent} from './common/action-button/action-button.component';
import { DataService } from './services/data.service';
import { MenuComponent } from './common/menu/menu.component';
import { HttpModule }    from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    ActionButtonComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
	MdButtonModule,
	MdCheckboxModule,
	MdInputModule,
	MdSidenavModule,
	FlexLayoutModule,
	MdIconModule,
	HttpModule,
	MdRadioModule,
	MdDatepickerModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
