import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriceDepartComponent } from './matrice-depart.component';

describe('MatriceDepartComponent', () => {
  let component: MatriceDepartComponent;
  let fixture: ComponentFixture<MatriceDepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriceDepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriceDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
