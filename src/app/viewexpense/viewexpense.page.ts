import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-viewexpense",
  templateUrl: "./viewexpense.page.html",
  styleUrls: ["./viewexpense.page.scss"],
})
export class ViewexpensePage  {
  expense: any;
  
  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private storage: Storage,
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.expense = JSON.parse(params.special);
      }
    });

  }




  goAnOtherPage() {
    this.navCtrl.navigateForward("home");
  }
}
