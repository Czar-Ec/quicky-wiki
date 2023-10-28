import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill'

import { WikiEditorComponent } from './wiki-editor.component';
import { SharedModule } from '../modules/shared.module';
import { WikiEditorAddSectionComponent } from './wiki-editor-add-section/wiki-editor-add-section.component';
import { WikiEditorService } from './service/wiki-editor.service';

const components = [
  WikiEditorComponent
]

@NgModule({
  declarations: [
    ...components,
    WikiEditorAddSectionComponent
  ],
  exports: [
    ...components
  ],
  imports: [
    BrowserModule,
    SharedModule,
    QuillModule.forRoot(),
  ],
  providers: [
    WikiEditorService
  ]
})
export class WikiEditorModule { }
