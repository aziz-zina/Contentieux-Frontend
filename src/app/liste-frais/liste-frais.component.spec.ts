import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFraisComponent } from './liste-frais.component';

describe('ListeFraisComponent', () => {
  let component: ListeFraisComponent;
  let fixture: ComponentFixture<ListeFraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFraisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
