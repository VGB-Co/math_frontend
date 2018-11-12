import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadeboardComponent } from './ladeboard.component';

describe('LadeboardComponent', () => {
  let component: LadeboardComponent;
  let fixture: ComponentFixture<LadeboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadeboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadeboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
