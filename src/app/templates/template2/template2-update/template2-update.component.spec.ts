import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template2UpdateComponent } from './template2-update.component';

describe('Template2UpdateComponent', () => {
  let component: Template2UpdateComponent;
  let fixture: ComponentFixture<Template2UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Template2UpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template2UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
