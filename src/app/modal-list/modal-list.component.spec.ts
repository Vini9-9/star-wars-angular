import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListComponent } from './modal-list.component';

describe('ModalListComponent', () => {
  let component: ModalListComponent;
  let fixture: ComponentFixture<ModalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
