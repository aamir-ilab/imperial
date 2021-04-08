import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-fa-solid/window-close';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'vex-upload-worker-document',
  templateUrl: './upload-worker-document.component.html',
  styleUrls: ['./upload-worker-document.component.scss']
})
export class UploadWorkerDocumentComponent implements OnInit {
  icClose = icClose;
  files: any = [];
	fileNames: any = [];
	uploadFiles: any = [];
  isUploading = false;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
  private dialogRef: MatDialogRef<UploadWorkerDocumentComponent>,
  private storage:AngularFireStorage,
  public snackBar: MatSnackBar,) { }
  ngOnInit(): void {
  }

  fileChangeEvent(event: any): void {
		console.log('fileChangeEvent', event)
		this.files = event.target.files;
		console.log('files.length', event.target.files[0], event.target.files.length)
		if (this.files && this.files.length < 11) {
			this.isUploading = true;
			for (let i = 0; i < this.files.length; i++) {
				const file = this.files[i];
				console.log('file', file);
				this.fileNames.push(file.name);
			}
		}
		else{
			// this.submitValid = false;
			this.showSnackBar('You can only upload a maximum of 10 files');

		}
	}
	onUploadFiles(){
		if(this.files.length > 0 && this.files.length < 11){
			for (let i = 0; i < this.files.length; i++) {
				const element = this.files[i];
				console.log('element', i, element)
        let ext = element.name.split(".").pop();
				console.log('ext', i, ext)
				var fileName = element.name.split('.').slice(0,-1).join('.') + '_' +  new Date().getTime();
				var filePath = `Profile/${fileName}`;
				const fileRef = this.storage.ref(filePath)
				this.storage.upload(filePath, element).snapshotChanges().pipe(
					finalize(()=>{
						fileRef.getDownloadURL().subscribe((url)=>{
							console.log('filePath', url);
							this.uploadFiles.push({url:url,title:element.name,fileType:ext,dateUpload:new Date()});
						})
					})
				).subscribe();
				if((i + 1) == (this.files.length)){
					console.log('last iteration')
					this.showSnackBar('Image Uploaded Successfully');
					this.isUploading = true;
				}

        this.dialogRef.close(this.uploadFiles);
			}
		}
		else{
			this.isUploading = false;
			this.showSnackBar('You can only upload a maximum of 10 files');
		}
	}

  showSnackBar(message: string){
    let config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'right';
    config.duration = 3000;
    this.snackBar.open(message, 'Cancel', config);
  }

}
