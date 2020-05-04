import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template1UpdateComponent } from './template1-update.component';

describe('Template1UpdateComponent', () => {
  let component: Template1UpdateComponent;
  let fixture: ComponentFixture<Template1UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Template1UpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template1UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
