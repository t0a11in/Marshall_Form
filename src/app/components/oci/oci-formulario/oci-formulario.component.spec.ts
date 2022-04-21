import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OciFormularioComponent } from './oci-formulario.component';

describe('OciFormularioComponent', () => {
  let component: OciFormularioComponent;
  let fixture: ComponentFixture<OciFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OciFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OciFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
