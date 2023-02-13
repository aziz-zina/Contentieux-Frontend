import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterFraisComponent } from './consulter-frais.component';

describe('ConsulterFraisComponent', () => {
  let component: ConsulterFraisComponent;
  let fixture: ComponentFixture<ConsulterFraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterFraisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
