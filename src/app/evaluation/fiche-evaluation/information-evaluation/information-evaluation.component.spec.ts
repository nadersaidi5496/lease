import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationEvaluationComponent } from './information-evaluation.component';

describe('InformationEvaluationComponent', () => {
  let component: InformationEvaluationComponent;
  let fixture: ComponentFixture<InformationEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
