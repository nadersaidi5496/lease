import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheProfilComponent } from './fiche-profil.component';

describe('FicheProfilComponent', () => {
  let component: FicheProfilComponent;
  let fixture: ComponentFixture<FicheProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
