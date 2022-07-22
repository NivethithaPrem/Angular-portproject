import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortprojectComponent } from './portproject.component';

describe('PortprojectComponent', () => {
  let component: PortprojectComponent;
  let fixture: ComponentFixture<PortprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
