import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListingsPageComponent } from './edit-listings-page.component';

describe('EditListingsPageComponent', () => {
  let component: EditListingsPageComponent;
  let fixture: ComponentFixture<EditListingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditListingsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditListingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
