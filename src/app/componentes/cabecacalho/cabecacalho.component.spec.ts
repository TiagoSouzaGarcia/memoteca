import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecacalhoComponent } from './cabecacalho.component';

describe('CabecacalhoComponent', () => {
  let component: CabecacalhoComponent;
  let fixture: ComponentFixture<CabecacalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecacalhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabecacalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
