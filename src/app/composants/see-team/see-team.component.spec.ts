import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTeamComponent } from './see-team.component';

describe('SeeTeamComponent', () => {
  let component: SeeTeamComponent;
  let fixture: ComponentFixture<SeeTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
