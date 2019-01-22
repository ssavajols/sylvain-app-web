import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PhrasesComponent } from './phrases.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PhrasesComponent', () => {
  let component: PhrasesComponent;
  let fixture: ComponentFixture<PhrasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhrasesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 buttons', () => {
    component.phrases = of([
      { id: 1, src: 'media/1' },
      { id: 2, src: 'media/2' }
    ]);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('sa-button').length).toBe(2);
  });
});
