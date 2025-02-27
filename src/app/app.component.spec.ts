import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'learn-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('learn-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('learn-angular app is running!');
  });

  it('should give number of notes for 22 bill amount', () => {
    const billAmount = 22;
    const denominations = [1,2,5,10,20];
    const app = new AppComponent();
    expect(app.getDenominations(billAmount, denominations)).toBe(2);
  });

  it('should give number of notes for 17 bill amount', () => {
    const billAmount = 17;
    const denominations = [1, 5, 10];
    const app = new AppComponent();
    expect(app.getDenominations(billAmount, denominations)).toBe(4);
  });
  
  it('should give number of notes for 10 bill amount', () => {
    const billAmount = 10;
    const denominations = [1, 5, 10];
    const app = new AppComponent();
    expect(app.getDenominations(billAmount, denominations)).toBe(1);
  });
});
