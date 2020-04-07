import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsGlobalesComponent } from './items-globales.component';

describe('ItemsGlobalesComponent', () => {
  let component: ItemsGlobalesComponent;
  let fixture: ComponentFixture<ItemsGlobalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsGlobalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsGlobalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
