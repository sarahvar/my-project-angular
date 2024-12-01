import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViktorComponent } from './viktor.component';

describe('ViktorComponent', () => {
  let component: ViktorComponent;
  let fixture: ComponentFixture<ViktorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViktorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViktorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
