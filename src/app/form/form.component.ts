import { Component, OnInit } from "@angular/core";
import { $ } from "protractor";
import { CloneVisitor } from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  addNo(event) {
    let add = document.getElementById("newNo").cloneNode(true);
    document.getElementById("newNo").appendChild(add);
    document.getElementById("addNo").remove();
  }

  constructor() {}

  ngOnInit() {}
}
