import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template4UpdateComponent } from './template4-update.component';

describe('Template4UpdateComponent', () => {
  let component: Template4UpdateComponent;
  let fixture: ComponentFixture<Template4UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Template4UpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template4UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
