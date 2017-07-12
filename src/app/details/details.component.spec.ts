import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DetailsComponent } from './details.component';

import { CommonService } from '../list/common.service';

let CommonServiceStub = {
  clients: [
    {
      "general": {
        "firstName": "Liana",
        "lastName": "Crooks",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
      },
      "job": {
        "company": "Ledner, Johnson and Predovic",
        "title": "Investor Functionality Coordinator"
      },
      "contact": {
        "email": "Gerry_Hackett77@gmail.com",
        "phone": "(895) 984-0132"
      },
      "address": {
        "street": "1520 Zemlak Cove",
        "city": "New Devon",
        "zipCode": "42586-7898",
        "country": "Guinea-Bissau"
      }
    },
    {
      "general": {
        "firstName": "Deontae",
        "lastName": "Dare",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg"
      },
      "job": {
        "company": "D'Amore, Dicki and Borer",
        "title": "International Applications Consultant"
      },
      "contact": {
        "email": "Kellie.Marvin38@yahoo.com",
        "phone": "1-615-843-3426 x600"
      },
      "address": {
        "street": "65901 Glover Terrace",
        "city": "Alden ton",
        "zipCode": "57744-4248",
        "country": "Kenya"
      }
    },
  ]
};

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      providers: [ CommonService ],
      imports: [ HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the client details', () => {
    expect(component).toBeTruthy();
  });

  it('should contain name "Liana"', () => {
    component.clientDetailsObj = CommonServiceStub.clients[0];
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('p'));
    el = de.nativeElement;

    expect(el.textContent).toContain('Liana');
  });
});
