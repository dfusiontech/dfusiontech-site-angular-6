import { TestBed, async } from '@angular/core/testing';
import { LayoutComponent } from '../app/states/layout.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          LayoutComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(LayoutComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'dfusiontech-site'`, async(() => {
    const fixture = TestBed.createComponent(LayoutComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('dfusiontech-site');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(LayoutComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to dfusiontech-site!');
  }));
});
