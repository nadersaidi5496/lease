import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoirEtreEmploiComponent } from './savoir-etre-emploi.component';

describe('SavoirEtreEmploiComponent', () => {
  let component: SavoirEtreEmploiComponent;
  let fixture: ComponentFixture<SavoirEtreEmploiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavoirEtreEmploiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavoirEtreEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
