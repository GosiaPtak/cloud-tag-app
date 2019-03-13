import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudAppComponent } from './cloud-app.component';

describe('CloudAppComponent', () => {
  let component: CloudAppComponent;
  let fixture: ComponentFixture<CloudAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
