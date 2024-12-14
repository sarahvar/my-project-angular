import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArcaneCombatComponent } from './arcane-combat.component';



describe('HistoryComponent', () => {
  let component: ArcaneCombatComponent;
  let fixture: ComponentFixture<ArcaneCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArcaneCombatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcaneCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
