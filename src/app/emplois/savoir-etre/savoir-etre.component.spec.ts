import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoirEtreComponent } from './savoir-etre.component';

describe('SavoirEtreComponent', () => {
  let component: SavoirEtreComponent;
  let fixture: ComponentFixture<SavoirEtreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavoirEtreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavoirEtreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
