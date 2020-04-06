import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavPrincipalComponent } from './menu-nav-principal.component';

describe('MenuNavPrincipalComponent', () => {
  let component: MenuNavPrincipalComponent;
  let fixture: ComponentFixture<MenuNavPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNavPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNavPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
