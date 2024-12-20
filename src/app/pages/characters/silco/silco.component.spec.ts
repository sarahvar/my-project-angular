import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilcoComponent } from './silco.component';

describe('ViComponent', () => {
  let component:  SilcoComponent;
  let fixture: ComponentFixture<SilcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SilcoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
