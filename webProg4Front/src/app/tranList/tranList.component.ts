import { Component } from '@angular/core';

@Component({
  selector: 'app-tranList',
  templateUrl: './tranList.component.html'
})

export class tranList{
  transactions = [
    {value:"1500", description:"fizetés"},
    {value:"-100", description:"kaja"},
    {value:"-1500", description:"lakbér"},
    {value:"1500", description:"maszek"},
    {value:"-500", description:"rezsi"},
  ]
}