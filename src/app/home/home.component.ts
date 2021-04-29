import { Component, Injectable, OnInit } from "@angular/core";
@Injectable()
export class HomeService {
  private val: string;
  public getVal() {
    return this.val;
  }
  public setVal(val: string) {
    this.val = val;
  }
  constructor() {}
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  public out: string;
  constructor(public service: HomeService) {}

  ngOnInit() {
    this.service.setVal("Home");
    this.out = this.service.getVal();
  }
}
