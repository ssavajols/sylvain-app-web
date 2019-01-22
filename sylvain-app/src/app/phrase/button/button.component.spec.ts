import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.audio.nativeElement = jasmine.createSpyObj(['play']);
    component.phrase = {
      id: 1,
      src: '/media/sample.mp3',
      styles: { margin: '12px 23px', transform: 'rotate(20deg)' }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should play audio file', () => {
    component.play();
    expect(component.audio.nativeElement.play).toHaveBeenCalled();
  });
});
