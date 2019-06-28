import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoirEmploiComponent } from './savoir-emploi.component';

describe('SavoirEmploiComponent', () => {
  let component: SavoirEmploiComponent;
  let fixture: ComponentFixture<SavoirEmploiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavoirEmploiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavoirEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
