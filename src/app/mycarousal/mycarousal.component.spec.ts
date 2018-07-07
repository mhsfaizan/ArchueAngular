import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycarousalComponent } from './mycarousal.component';

describe('MycarousalComponent', () => {
  let component: MycarousalComponent;
  let fixture: ComponentFixture<MycarousalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycarousalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
