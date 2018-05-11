import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkPollComponent } from './framework-poll.component';

describe('FrameworkPollComponent', () => {
  let component: FrameworkPollComponent;
  let fixture: ComponentFixture<FrameworkPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
