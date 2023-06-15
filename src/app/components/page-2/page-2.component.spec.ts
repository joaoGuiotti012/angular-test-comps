/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Page-2Component } from './page-2.component';

describe('Page-2Component', () => {
  let component: Page-2Component;
  let fixture: ComponentFixture<Page-2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page-2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page-2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
