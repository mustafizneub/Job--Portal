import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Temp7CreateComponent } from './temp7-create.component';

describe('Temp7CreateComponent', () => {
  let component: Temp7CreateComponent;
  let fixture: ComponentFixture<Temp7CreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temp7CreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temp7CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
