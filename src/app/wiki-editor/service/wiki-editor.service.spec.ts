import { TestBed } from '@angular/core/testing';

import { WikiEditorService } from './wiki-editor.service';

describe('WikiEditorService', () => {
  let service: WikiEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikiEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
