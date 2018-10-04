import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockComponent } from 'ng-mocks';
import { SiteHeaderComponent } from '@code-sharing/shared-core';
import { SharedComponent } from '@code-sharing/shared-component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(SiteHeaderComponent),
        MockComponent(SharedComponent)
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'web-app-one'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('web-app-one');
  }));
});
