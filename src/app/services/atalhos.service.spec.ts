/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AtalhosService } from './atalho.service';

describe('Service: Atalhos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtalhosService]
    });
  });

  it('should ...', inject([AtalhosService], (service: AtalhosService) => {
    expect(service).toBeTruthy();
  }));
});
