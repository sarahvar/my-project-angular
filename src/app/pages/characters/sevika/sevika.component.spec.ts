import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevikaComponent } from './sevika.component';

describe('JinxComponent', () => {
  let component: SevikaComponent;
  let fixture: ComponentFixture<SevikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevikaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
