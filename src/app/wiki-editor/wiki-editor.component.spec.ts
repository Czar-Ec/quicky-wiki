import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiEditorComponent } from './wiki-editor.component';

describe('WikiEditorComponent', () => {
  let component: WikiEditorComponent;
  let fixture: ComponentFixture<WikiEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WikiEditorComponent]
    });
    fixture = TestBed.createComponent(WikiEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
