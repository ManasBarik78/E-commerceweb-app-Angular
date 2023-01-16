import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  AllbuyItem: any[] = []
  constructor(private service: CommonService) {
    this.AllbuyItem = service.getAllbuyItem();
    console.log(this.AllbuyItem);

  }

  ngOnInit(): void {
  }

}
