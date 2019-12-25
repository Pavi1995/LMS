import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogspotComponent } from './blogspot.component';

describe('BlogspotComponent', () => {
  let component: BlogspotComponent;
  let fixture: ComponentFixture<BlogspotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogspotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogspotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
