import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPerfilComponent } from './form-perfil.component';

describe('FormPerfilComponent', () => {
  let component: FormPerfilComponent;
  let fixture: ComponentFixture<FormPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPerfilComponent]
    });
    fixture = TestBed.createComponent(FormPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
