import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServceCardComponent } from './servce-card.component';

describe('ServceCardComponent', () => {
  let component: ServceCardComponent;
  let fixture: ComponentFixture<ServceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
