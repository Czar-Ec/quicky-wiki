import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiEditorAddSectionComponent } from './wiki-editor-add-section.component';

describe('WikiEditorAddSectionComponent', () => {
  let component: WikiEditorAddSectionComponent;
  let fixture: ComponentFixture<WikiEditorAddSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WikiEditorAddSectionComponent]
    });
    fixture = TestBed.createComponent(WikiEditorAddSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
