import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent {
  selectedFile!: File;
  constructor(private http: HttpClient) {}
  selectfile(event: any) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }
  upload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http
      .post('http://localhost/apache/php_angular_bootstrap/image/image.php', fd)
      .subscribe((res) => {
        console.log('fd -->', fd);
        console.log(res);
      });
  }
}
