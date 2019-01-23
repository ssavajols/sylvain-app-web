import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute styles with RGB color', () => {
    component.color = {
      r: 101,
      g: 102,
      b: 103,
    };

    expect(component.computeStyle().background).toContain('101,102,103');
  });

  it('should compute styles when window scroll is triggered', () => {
    component.getStyle = jasmine.createSpy('getStyle');
    (window as any).scrollY = 33;

    window.dispatchEvent(new Event('scroll'));

    expect(component.getStyle).toHaveBeenCalledWith(0.33);
  });

  it('should compute styles with correct gradient position', () => {
    const background = component.computeStyle(0.5).background;

    expect(background).toContain('130px');
    expect(background).toContain('170px');
  });

  it('should compute style with correct background image and position', () => {
    component.backgroundImage.backgroundImage = 'url(toto.jpg)';

    const background = component.computeStyle(0.3).background;

    expect(background).toContain('url(toto.jpg)');
    expect(background).toContain('-121px');
  });

  it('should compute style without background image', () => {
    component.color = {
      r: 101,
      g: 102,
      b: 103,
    };

    (window as any).innerWidth = 1024;

    const background = component.computeWithoutBackgroundImage().background;

    expect(background).not.toContain('url(toto.jpg)');
    expect(background).toContain('101,102,103,1');
  });
});
