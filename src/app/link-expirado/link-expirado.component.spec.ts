import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkExpiradoComponent } from './link-expirado.component';

describe('LinkExpiradoComponent', () => {
  let component: LinkExpiradoComponent;
  let fixture: ComponentFixture<LinkExpiradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkExpiradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkExpiradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
