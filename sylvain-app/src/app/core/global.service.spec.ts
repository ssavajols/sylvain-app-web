import { TestBed } from '@angular/core/testing';

import { GlobalService } from './global.service';

describe('GlobalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  let service: GlobalService;

  beforeEach(() => {
    service = TestBed.get(GlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return XS breakpoint', () => {
    (window as any).innerWidth = 102;
    expect(service.getBreakpoint()).toBe('XS');
  });

  it('should return SM breakpoint', () => {
    (window as any).innerWidth = 641;
    expect(service.getBreakpoint()).toBe('SM');
  });

  it('should return MD breakpoint', () => {
    (window as any).innerWidth = 769;
    expect(service.getBreakpoint()).toBe('MD');
  });

  it('should return LG breakpoint', () => {
    (window as any).innerWidth = 1025;
    expect(service.getBreakpoint()).toBe('LG');
  });
});
