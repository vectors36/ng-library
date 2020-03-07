import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsCardListComponent } from './tutorials-card-list.component';

describe('TutorialsCardListComponent', () => {
  let component: TutorialsCardListComponent;
  let fixture: ComponentFixture<TutorialsCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialsCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
