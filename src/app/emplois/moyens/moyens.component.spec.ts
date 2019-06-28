import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyensComponent } from './moyens.component';

describe('MoyensComponent', () => {
  let component: MoyensComponent;
  let fixture: ComponentFixture<MoyensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoyensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoyensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
