import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFraisComponent } from './update-frais.component';

describe('UpdateFraisComponent', () => {
  let component: UpdateFraisComponent;
  let fixture: ComponentFixture<UpdateFraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFraisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
