import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingUiComponent } from './ranking-ui.component';

describe('RankingUiComponent', () => {
  let component: RankingUiComponent;
  let fixture: ComponentFixture<RankingUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
