import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCreateComponent } from './temp-create.component';

describe('TempCreateComponent', () => {
  let component: TempCreateComponent;
  let fixture: ComponentFixture<TempCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
