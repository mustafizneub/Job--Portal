import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template3UpdateComponent } from './template3-update.component';

describe('Template3UpdateComponent', () => {
  let component: Template3UpdateComponent;
  let fixture: ComponentFixture<Template3UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Template3UpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template3UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
