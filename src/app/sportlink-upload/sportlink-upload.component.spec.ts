import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportlinkUploadComponent } from './sportlink-upload.component';

describe('SportlinkUploadComponent', () => {
  let component: SportlinkUploadComponent;
  let fixture: ComponentFixture<SportlinkUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportlinkUploadComponent]
    });
    fixture = TestBed.createComponent(SportlinkUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
