import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTipoDosComponent } from './menu-tipo-dos.component';

describe('MenuTipoDosComponent', () => {
  let component: MenuTipoDosComponent;
  let fixture: ComponentFixture<MenuTipoDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTipoDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTipoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
