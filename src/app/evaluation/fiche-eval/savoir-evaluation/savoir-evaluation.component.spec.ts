import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoirEvaluationComponent } from './savoir-evaluation.component';

describe('SavoirEvaluationComponent', () => {
  let component: SavoirEvaluationComponent;
  let fixture: ComponentFixture<SavoirEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavoirEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavoirEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
