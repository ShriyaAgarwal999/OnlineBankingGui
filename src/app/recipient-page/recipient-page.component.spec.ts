import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientPageComponent } from './recipient-page.component';

describe('RecipientPageComponent', () => {
  let component: RecipientPageComponent;
  let fixture: ComponentFixture<RecipientPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
