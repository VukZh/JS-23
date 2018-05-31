import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDictionaryComponent } from '../fetch-translation.service';

describe('TheDictionaryComponent', () => {
  let component: TheDictionaryComponent;
  let fixture: ComponentFixture<TheDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
