import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricePotentielComponent } from './matrice-potentiel.component';

describe('MatricePotentielComponent', () => {
  let component: MatricePotentielComponent;
  let fixture: ComponentFixture<MatricePotentielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatricePotentielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricePotentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
