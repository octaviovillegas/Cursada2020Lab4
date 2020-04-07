import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsGenericosComponent } from './items-genericos.component';

describe('ItemsGenericosComponent', () => {
  let component: ItemsGenericosComponent;
  let fixture: ComponentFixture<ItemsGenericosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsGenericosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsGenericosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
