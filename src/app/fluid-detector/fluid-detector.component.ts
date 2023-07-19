import { Component, OnInit } from "@angular/core";
import { ChatService } from "../chatService/chat-service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-fluid-detector",
  templateUrl: "./fluid-detector.component.html",
  styleUrls: ["./fluid-detector.component.scss"],
})
export class FluidDetectorComponent implements OnInit {
  constructor(private service: ChatService, private http: HttpClient) {}
  isUpload: boolean = false;
  selectedValue: string | undefined;
  selectedUpload: any = 0;
  isClickPred: boolean = false;
  uploadedImageProbabilityResults: string = "";
  selectedImageProbabilityResults: string = "";
  selectIsTrans: boolean = false;
  uploadIsTrans: boolean = false;
  transCheck: boolean = false;
  transCheckSelect: boolean = false;

  fileToUpload?: File;
  imageUrl?: string;
  selectedColor: string = "#000000";

  option: { name: string; value: number }[] = [
    { name: "Yes", value: 1 },
    { name: "No", value: 0 },
  ];
  ngOnInit(): void {}
  selectedUploadChanged(): void {
    if (this.selectedUpload === 1) {
      console.log("true");
      this.isUpload = true;
    } else if (this.selectedUpload === 0) {
      this.isUpload = false;
      console.log("false");
    }
  }

  updateValue(value: string): void {
    this.selectedValue = value;

    if (this.selectedValue === "Transparent") {
      console.log("Selected value:", this.selectedValue);
      this.selectedImageProbabilityResults = "0%";
      this.selectIsTrans = true;
    } else {
      this.selectIsTrans = false;
      const formData: { color: String } = { color: this.selectedValue };
      this.sendDataToApi(formData);
    }
  }
  gotoPred() {
    this.service.setFulidColor(true);
    // console.log("isFuid", this.service.isFulidColor);
  }
  openImagePicker() {
    const inputElement: HTMLElement | null = document.getElementById(
      "imageInput"
    )!;
    inputElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  captureColor(event: MouseEvent) {
    if (this.transCheck === false) {
      const canvas: HTMLCanvasElement = document.createElement("canvas");
      const context: CanvasRenderingContext2D | null = canvas.getContext("2d")!;
      const img: HTMLImageElement = new Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        context!.drawImage(img, 0, 0);
        const pixelData: Uint8ClampedArray = context!.getImageData(
          event.offsetX,
          event.offsetY,
          1,
          1
        ).data;

        const red = pixelData[0];
        const green = pixelData[1];
        const blue = pixelData[2];

        this.selectedColor = this.rgbToHex(red, green, blue);
      };

      img.src = this.imageUrl!;
    }
  }

  rgbToHex(r: number, g: number, b: number): string {
    return `#${this.componentToHex(r)}${this.componentToHex(
      g
    )}${this.componentToHex(b)}`;
  }

  componentToHex(c: number): string {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  predictDisese() {
    this.isClickPred = true;
    const formData: { color: String } = { color: this.selectedColor };
    if (this.selectedColor === "Transparent") {
      this.uploadedImageProbabilityResults = "0%";
      this.uploadIsTrans = true;
    } else {
      this.uploadIsTrans = false;
      this.sendDataToApi(formData);
    }
  }

  sendDataToApi(data: any) {
    try {
      this.http.post("http://127.0.0.1:5000/imagePred", data).subscribe(
        (response: any) => {
          if (this.isUpload) {
            this.uploadedImageProbabilityResults = response.probability;
          } else {
            this.selectedImageProbabilityResults = response.probability;
          }
        },
        (error) => {
          console.error(error);
        }
      );
    } catch {
      alert("Error");
    }
  }

  checkTrans() {
    this.transCheck = !this.transCheck;

    if (this.transCheck === true) {
      this.selectedColor = "Transparent";
      this.uploadedImageProbabilityResults = "";
    } else {
      this.selectedColor = "#000000";
      this.uploadedImageProbabilityResults = "";
    }
  }
  checkTransOfselect() {
    this.transCheckSelect = !this.transCheckSelect;
    if (this.transCheckSelect == true) {
      this.updateValue("Transparent");
    } else {
      this.selectedValue = "";
    }
  }
}
