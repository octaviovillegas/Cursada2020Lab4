import { async, TestBed } from '@angular/core/testing';
import { MenuNavPrincipalComponent } from './menu-nav-principal.component';
describe('MenuNavPrincipalComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MenuNavPrincipalComponent]
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
//# sourceMappingURL=menu-nav-principal.component.spec.js.map