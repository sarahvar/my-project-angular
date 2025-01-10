import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelComponent } from './mel-medarda.component';

describe('JinxComponent', () => {
  let component: MelComponent;
  let fixture: ComponentFixture<MelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
