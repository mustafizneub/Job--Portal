import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template6UpdateComponent } from './template6-update.component';

describe('Template6UpdateComponent', () => {
  let component: Template6UpdateComponent;
  let fixture: ComponentFixture<Template6UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Template6UpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template6UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
