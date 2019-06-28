import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyensEmploiComponent } from './moyens-emploi.component';

describe('MoyensEmploiComponent', () => {
  let component: MoyensEmploiComponent;
  let fixture: ComponentFixture<MoyensEmploiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoyensEmploiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoyensEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
