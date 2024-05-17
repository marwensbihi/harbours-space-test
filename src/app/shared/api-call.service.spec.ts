import { TestBed } from '@angular/core/testing';
import { HttpClientModule, } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiCallService } from './api-call.service';

describe('ApiCallService', () => {
  let service: ApiCallService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,HttpClientTestingModule], 
      providers: [ApiCallService]
    });
   
    service = TestBed.inject(ApiCallService);
     httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve data from the API', () => {
    const responseData = {key: 'value'};

    service.getData().subscribe(data => {
      expect(data).toEqual(responseData);
    });

    const req = httpMock.expectOne(req => req.method === 'GET');
    
    req.flush(responseData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
