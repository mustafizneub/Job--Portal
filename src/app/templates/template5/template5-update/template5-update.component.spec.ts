import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template5UpdateComponent } from './template5-update.component';

describe('Template5UpdateComponent', () => {
  let component: Template5UpdateComponent;
  let fixture: ComponentFixture<Template5UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Template5UpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template5UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
