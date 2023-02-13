import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherDebiteurComponent } from './afficher-debiteur.component';

describe('AfficherDebiteurComponent', () => {
  let component: AfficherDebiteurComponent;
  let fixture: ComponentFixture<AfficherDebiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherDebiteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherDebiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
