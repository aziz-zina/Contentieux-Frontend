import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFraisComponent } from './info-frais.component';

describe('InfoFraisComponent', () => {
  let component: InfoFraisComponent;
  let fixture: ComponentFixture<InfoFraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFraisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
