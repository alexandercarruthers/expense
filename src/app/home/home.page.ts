import { Component } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { DatePicker } from "@ionic-native/date-picker";
import { File } from "@ionic-native/file";
import { Storage } from "@ionic/storage";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  totalCost: number;

  expenseTitle: string;
  expenseCost: number;
  expenseDate: any;
  expenseTime: any;
  image: any = "";

  storageItems: Array<any>;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private camera: Camera,
    private storage: Storage
  ) {
    //populate local
    this.storageItems = [];
    this.storage.forEach((value, key, index) => {
      this.storageItems.push(value);
    });
  }

  ionViewWillEnter(){
    console.log("ionviewillenter")
    this.updateCost();
  }

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
    let obj = {
      id: Math.random().toString(36).substr(2, 5),
      title: this.expenseTitle,
      cost: this.expenseCost * 100,
      img: this.image,
      expense_time: this.expenseTime,
      expense_date: this.expenseDate,
      submitted_date: new Date(),
    };
    //local
    this.storageItems.push(obj);
    //storage
    this.storage.set(obj.id, obj);
    //update cost
    this.updateCost();
    this.clearInputs();
  }

  clearInputs() {
    this.expenseTitle = "";
    this.expenseCost = NaN;
    this.expenseDate = "";
    this.expenseTime = "";
  }

  deleteAllExpenses() {
    //local
    this.storageItems = [];
    //storage
    this.storage.clear();
    //update cost
    this.updateCost();
  }

  updateCost() {
    this.totalCost = 0;
    for (var i = 0; i < this.storageItems.length; i++) {
      console.log(this.storageItems[i].cost)
      this.totalCost = this.totalCost + this.storageItems[i].cost;
    }
  }

  deleteTask(index) {
    let del_obj = this.storageItems.splice(index, 1);
    console.log(del_obj[0].id);
    //local
    delete this.storageItems[del_obj[0].id];
    //storage
    this.storage.remove(del_obj[0].id);
    //update cost
    this.updateCost();
  }
}
