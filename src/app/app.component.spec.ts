import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { screen, render } from '@testing-library/angular';
import { CountComponent } from './count/count.component';
import { Routes } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    })
  );

  it('should create the app', async () => {
    const app = await render(AppComponent);

    expect(app).toBeTruthy();
  });

  it(`should have as title 'myAngular'`, async () => {
    const routes: Routes = [{ path: 'counter', component: CountComponent }];

    const { navigate } = await render(AppComponent, {
      imports: [RouterTestingModule.withRoutes(routes)],
    });
    const title = screen.findByText('myAngular');
    // console.log(title);
    await navigate('/counter')
    expect(screen.getByTestId('count')).toBeInTheDocument
    expect(title).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'myAngular app is running!'
    );
  });
});
