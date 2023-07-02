import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { screen, render } from '@testing-library/angular';
import { CountComponent } from './book/count/count.component';
import { Routes } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookComponent } from './book/book.component';

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

  it(`should route to count`, async () => {
    const routes: Routes = [{ path: 'book', component: BookComponent }];

    const { navigate,fixture } = await render(AppComponent, {
      imports: [RouterTestingModule.withRoutes(routes),HttpClientTestingModule],
    });
    screen.debug()
    // console.log(title);
    await navigate('/book')
    expect(screen.getByTestId('count')).toBeInTheDocument
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain(
  //     'myAngular app is running!'
  //   );
  // });
});
