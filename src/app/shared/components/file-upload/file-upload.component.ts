import {Component, Input} from '@angular/core';
import {AbstractControl} from "@angular/forms";
import {FileUpload} from "primeng/fileupload";

@Component({
  selector: 'app-file-upload',
  imports: [
    FileUpload
  ],
  templateUrl: './file-upload.component.html',
  standalone: true,
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  @Input() control: AbstractControl<File> | null | undefined;

  uploadedFiles: any;

  public uploadFile = (files: any | null) => {
    this.control?.patchValue(files.currentFiles[0])
  }
}
