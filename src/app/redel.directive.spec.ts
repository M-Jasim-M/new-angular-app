// import { RedelDirective } from './redel.directive';

// describe('RedelDirective', () => {
//   it('should create an instance', () => {
//     const directive = new RedelDirective();
//     expect(directive).toBeTruthy();
//   });
// });
import { TestBed } from '@angular/core/testing';
import { RedelDirective } from './redel.directive';
import { ElementRef } from '@angular/core';

describe('RedelDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {
      nativeElement: {
        style: {}
      }
    };

    const directive = new RedelDirective(elementRefMock as ElementRef);
    expect(directive).toBeTruthy();
  });
});
