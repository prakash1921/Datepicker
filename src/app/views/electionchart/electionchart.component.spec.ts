import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionchartComponent } from './electionchart.component';

describe('ElectionchartComponent', () => {
  let component: ElectionchartComponent;
  let fixture: ComponentFixture<ElectionchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
