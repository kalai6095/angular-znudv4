import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdRichTextEditorComponent } from './md-rich-text-editor.component';

describe('MdRichTextEditorComponent', () => {
  let component: MdRichTextEditorComponent;
  let fixture: ComponentFixture<MdRichTextEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdRichTextEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdRichTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
