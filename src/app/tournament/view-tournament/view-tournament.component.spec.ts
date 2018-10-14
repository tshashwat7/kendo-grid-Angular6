import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTournamentComponent } from './view-tournament.component';

describe('ViewTournamentComponent', () => {
  let component: ViewTournamentComponent;
  let fixture: ComponentFixture<ViewTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
