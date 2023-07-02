import { Component } from '@angular/core';
import { FakeServiceService } from '../../fake-service.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent {
  customers$ = this.fakeService.load();
  constructor(private fakeService:FakeServiceService){}
  counter = 0;
}
