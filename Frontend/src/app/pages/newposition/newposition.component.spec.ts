import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpositionComponent } from './newposition.component';

describe('NewpositionComponent', () => {
  let component: NewpositionComponent;
  let fixture: ComponentFixture<NewpositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewpositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
