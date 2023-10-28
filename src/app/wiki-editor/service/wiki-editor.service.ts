import { Injectable } from '@angular/core';
import Quill from 'quill';

@Injectable()
export class WikiEditorService {

  // create an object that tracks sections with instances of Quill https://github.com/quilljs/quill/issues/1129

  private quillEditors: Quill[] = []

  constructor() { }

  /**
   * Adds a quill editor instance to track
   * @param sectionId 
   */
  public addSection(sectionId: string) {
    
  }
}
