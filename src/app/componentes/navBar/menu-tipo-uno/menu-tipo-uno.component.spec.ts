import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTipoUnoComponent } from './menu-tipo-uno.component';

describe('MenuTipoUnoComponent', () => {
  let component: MenuTipoUnoComponent;
  let fixture: ComponentFixture<MenuTipoUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTipoUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTipoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
