import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoirFaireEvaluationComponent } from './savoir-faire-evaluation.component';

describe('SavoirFaireEvaluationComponent', () => {
  let component: SavoirFaireEvaluationComponent;
  let fixture: ComponentFixture<SavoirFaireEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavoirFaireEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavoirFaireEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
