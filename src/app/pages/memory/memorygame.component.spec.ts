import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemoryGameComponent } from './memorygame.component';



describe('HistoryComponent', () => {
  let component: MemoryGameComponent;
  let fixture: ComponentFixture<MemoryGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoryGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
