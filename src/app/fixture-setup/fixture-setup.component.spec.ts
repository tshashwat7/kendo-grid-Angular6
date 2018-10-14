import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureSetupComponent } from './fixture-setup.component';

describe('FixtureSetupComponent', () => {
  let component: FixtureSetupComponent;
  let fixture: ComponentFixture<FixtureSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
