import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoirFaireEmploiComponent } from './savoir-faire-emploi.component';

describe('SavoirFaireEmploiComponent', () => {
  let component: SavoirFaireEmploiComponent;
  let fixture: ComponentFixture<SavoirFaireEmploiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavoirFaireEmploiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavoirFaireEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
