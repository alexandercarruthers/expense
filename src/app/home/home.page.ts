import { Component } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

import { File } from "@ionic-native/file";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  expenses = [];
  totalCost = 0;
  expenseTitle: string;
  expenseCost: number;
  image: any = "";
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private camera: Camera
  ) {}

  openCam() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        //alert(imageData)
        this.image = (<any>window).Ionic.WebView.convertFileSrc(imageData);        
      },
      (err) => {
        // Handle error
        alert("error " + JSON.stringify(err));
      }
    );
  }

  addTask() {
    this.expenses.push({
      title: this.expenseTitle,
      cost: this.expenseCost * 100,
      img: this.image,
    });
    this.updateCost();
    this.expenseTitle = "";
    this.expenseCost = NaN;
    console.log(this.expenses);
  }

  updateCost() {
    this.totalCost = 0;
    for (var i = 0; i < this.expenses.length; i++) {
      this.totalCost += parseInt(this.expenses[i].cost);
    }
  }

  deleteTask(index) {
    this.expenses.splice(index, 1);
    this.updateCost();
  }
}
