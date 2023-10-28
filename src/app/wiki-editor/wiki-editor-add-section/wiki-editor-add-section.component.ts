import { Component } from '@angular/core';
import { WikiEditorService } from '../service/wiki-editor.service';

@Component({
  selector: 'app-wiki-editor-add-section',
  templateUrl: './wiki-editor-add-section.component.html',
  styleUrls: ['./wiki-editor-add-section.component.scss']
})
export class WikiEditorAddSectionComponent {
  constructor(
    private wikiEditorService: WikiEditorService
  ) {

  }

  public addNormalSection() {
    console.log('ping')
  }
}
