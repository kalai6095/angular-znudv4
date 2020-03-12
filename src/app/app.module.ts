import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  HtmlEditorService,
  ImageService,
  LinkService,
  RichTextEditorModule,
  ToolbarService
} from '@syncfusion/ej2-angular-richtexteditor';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MdRichTextEditorComponent} from './md-rich-text-editor/md-rich-text-editor.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,RichTextEditorModule ],
  declarations: [ AppComponent, HelloComponent, MdRichTextEditorComponent ],
  bootstrap:    [ AppComponent ],
  providers:[ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppModule { }
