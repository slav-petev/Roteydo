import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoomerangingComponent } from './boomeranging.component';

describe('BoomerangingComponent', () => {
  let component: BoomerangingComponent;
  let fixture: ComponentFixture<BoomerangingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoomerangingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoomerangingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
