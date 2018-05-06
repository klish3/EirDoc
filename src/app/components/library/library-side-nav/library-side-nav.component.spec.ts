import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarySideNavComponent } from './library-side-nav.component';

describe('LibrarySideNavComponent', () => {
  let component: LibrarySideNavComponent;
  let fixture: ComponentFixture<LibrarySideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarySideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarySideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
