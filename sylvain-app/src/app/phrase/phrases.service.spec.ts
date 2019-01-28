import { TestBed } from '@angular/core/testing';
import 'jasmine-ajax';

import { PhrasesService } from './phrases.service';

describe('PhrasesService', () => {
  beforeEach(() => {
    jasmine.Ajax.install();
    TestBed.configureTestingModule({});
  });

  afterEach(() => {
    jasmine.Ajax.uninstall();
  });

  it('should be created', () => {
    const service: PhrasesService = TestBed.get(PhrasesService);
    expect(service).toBeTruthy();
  });

  it('should return audio with BASE_URI', () => {
    const service: PhrasesService = TestBed.get(PhrasesService);
    expect(service.getAudio('toto')).toBe(service.BASE_URI + 'toto');
  });

  it('should return audio with BASE_URI (no slash ending)', () => {
    const service: PhrasesService = TestBed.get(PhrasesService);

    service.BASE_URI = 'http://toto';

    expect(service.getAudio('/toto')).toBe(service.BASE_URI + '/' + 'toto');
  });

  it('should convert data audio path with BASE_URI', async () => {
    const service: PhrasesService = TestBed.get(PhrasesService);
    const response: JasmineAjaxResponse = {
      status: 200,
      response: JSON.stringify([
        {
          id: '1',
          src: '/test.mp3'
        }
      ])
    };
    service.BASE_URI = 'http://toto/';

    service.phrases$.subscribe(medias => {
      expect(medias[0].src).toBe('http://toto/test.mp3');
    });
    jasmine.Ajax.requests.mostRecent().respondWith(response);
  });
});
