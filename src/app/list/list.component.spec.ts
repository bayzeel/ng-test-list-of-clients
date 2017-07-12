import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ListComponent } from './list.component';

import { CommonService } from './common.service';

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

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      providers: [ CommonService],
      imports: [ HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the clients list', () => {
    expect(component).toBeTruthy();
  });

  it('should component.clients[0].general.firstName equal "Liana"', () => {
    component.clients = JSON.parse(JSON.stringify(CommonServiceStub.clients));
    fixture.detectChanges();

    expect(component.clients[0].general.firstName).toEqual('Liana');
  });

  it('should contain name "Liana"', () => {
    component.clients = JSON.parse(JSON.stringify(CommonServiceStub.clients));
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('p'));
    el = de.nativeElement;

    expect(el.textContent).toContain('Liana');
  });

  it('should call search method', () => {
    spyOn(component, 'search');
    component.clients = JSON.parse(JSON.stringify(CommonServiceStub.clients));

    let inputDe = fixture.debugElement.query(By.css('.input--text'));
    let inputEl = inputDe.nativeElement;
    inputEl.value = '';
    inputEl.dispatchEvent(new Event('keydown'));
    inputEl.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();

    expect(component.search).toHaveBeenCalled();
  });
});
