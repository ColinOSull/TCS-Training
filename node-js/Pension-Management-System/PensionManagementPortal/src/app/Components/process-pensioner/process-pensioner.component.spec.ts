import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessPensionerComponent } from './process-pensioner.component';

describe('ProcessPensionerComponent', () => {
  let component: ProcessPensionerComponent;
  let fixture: ComponentFixture<ProcessPensionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessPensionerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessPensionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
