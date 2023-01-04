import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionerFormComponent } from './pensioner-form.component';

describe('PensionerFormComponent', () => {
  let component: PensionerFormComponent;
  let fixture: ComponentFixture<PensionerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensionerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
