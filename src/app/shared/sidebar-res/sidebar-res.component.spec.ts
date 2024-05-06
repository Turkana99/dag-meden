import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarResComponent } from './sidebar-res.component';

describe('SidebarResComponent', () => {
  let component: SidebarResComponent;
  let fixture: ComponentFixture<SidebarResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarResComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
