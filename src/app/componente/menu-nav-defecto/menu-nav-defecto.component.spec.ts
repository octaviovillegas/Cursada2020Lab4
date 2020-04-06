import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavDefectoComponent } from './menu-nav-defecto.component';

describe('MenuNavDefectoComponent', () => {
  let component: MenuNavDefectoComponent;
  let fixture: ComponentFixture<MenuNavDefectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNavDefectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNavDefectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
