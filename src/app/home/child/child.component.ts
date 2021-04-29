import { Component, OnInit } from "@angular/core";
import { HomeService } from "../home.component";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
  providers: [HomeService]
})
export class ChildComponent implements OnInit {
  public out: string;

  constructor(private service: HomeService) {}

  ngOnInit() {
    this.service.setVal('child');
    this.out = this.service.getVal();
  }
}
