import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherClientComponent } from './chercher-client.component';

describe('ChercherClientComponent', () => {
  let component: ChercherClientComponent;
  let fixture: ComponentFixture<ChercherClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChercherClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChercherClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
