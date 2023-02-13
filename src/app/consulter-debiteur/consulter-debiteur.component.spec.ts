import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterDebiteurComponent } from './consulter-debiteur.component';

describe('ConsulterDebiteurComponent', () => {
  let component: ConsulterDebiteurComponent;
  let fixture: ComponentFixture<ConsulterDebiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterDebiteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterDebiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
