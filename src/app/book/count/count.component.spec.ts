import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render,screen,prettyDOM } from '@testing-library/angular';
import '@testing-library/jest-dom'
import { CountComponent } from './count.component';
import { Customer } from '../../fake-service.service';
import { FakeServiceService } from '../../fake-service.service'
import { of } from 'rxjs';
import { createMock, Mock } from '@testing-library/angular/jest-utils';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CountComponent', () => {
  // let component: CountComponent;
  // let fixture: ComponentFixture<CountComponent>;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [CountComponent]
  //   });
  //   fixture = TestBed.createComponent(CountComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', async () => {
    // const fixture = TestBed.createComponent(CountComponent).componentInstance
    // const countDom = await render(CountComponent,{componentProperties: {counter: 5}, componentProviders: [
    //   {
    //     provide: FakeServiceService,
    //     // useValue: customersService,
    //   },
    // ],})

   const  {fixture} = await render(CountComponent,{componentProperties: {counter: 5}, componentProviders: [
      {
        provide: FakeServiceService,
        // useValue: customersService,
      },
    ],})

    const countNum = screen.getByTestId('count')
    // screen.debug(countNum)
    // console.log(prettyDOM(countNum));

    expect(countNum.innerHTML).toBe('Current Count: 5')
    expect(screen.getByText('Current Count: 5')).toBeInTheDocument()
    expect(fixture.componentInstance.counter).toBe(5)
  });
});

test('renders the provided customers with createMock', async () => {
  const customers: Customer[] = [
    {
      id: '1',
      name: 'sarah',
    },
    {
      id: '2',
      name: 'charlotte',
    },
  ];

  const fakesService = createMock(FakeServiceService);
  fakesService.load = jest.fn(() => of(customers));

  const  {fixture} = await render(CountComponent, {
    componentProviders: [
      {
        provide: FakeServiceService,
        // useValue: fakesService,
      },
    ],
  });

  // expect(fakesService.load).toBeCalledTimes(1)
  fixture.componentInstance.customers$.subscribe((res)=>{
    expect(res).toHaveLength(2)
  })
});


