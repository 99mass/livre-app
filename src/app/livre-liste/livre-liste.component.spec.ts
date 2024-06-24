import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreListeComponent } from './livre-liste.component';

describe('LivreListeComponent', () => {
  let component: LivreListeComponent;
  let fixture: ComponentFixture<LivreListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivreListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
