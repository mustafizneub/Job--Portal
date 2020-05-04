import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Temp7UpdateComponent } from './temp7-update.component';

describe('Temp7UpdateComponent', () => {
  let component: Temp7UpdateComponent;
  let fixture: ComponentFixture<Temp7UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temp7UpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temp7UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
