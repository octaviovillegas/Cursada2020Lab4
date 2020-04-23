import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaUsuarioComponent } from './grilla-usuario.component';

describe('GrillaUsuarioComponent', () => {
  let component: GrillaUsuarioComponent;
  let fixture: ComponentFixture<GrillaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
