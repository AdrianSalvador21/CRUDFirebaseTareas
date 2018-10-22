import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletadasComponent } from './completadas.component';

describe('CompletadasComponent', () => {
  let component: CompletadasComponent;
  let fixture: ComponentFixture<CompletadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
