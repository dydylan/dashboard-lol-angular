import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HisTeamComponent } from './his-team.component';

describe('HisTeamComponent', () => {
  let component: HisTeamComponent;
  let fixture: ComponentFixture<HisTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HisTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HisTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
