import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDadosComponent } from './tabela-dados.component';

describe('TabelaDadosComponent', () => {
  let component: TabelaDadosComponent;
  let fixture: ComponentFixture<TabelaDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaDadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
