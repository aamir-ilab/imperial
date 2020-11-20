import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ScrumboardCard } from '../../interfaces/scrumboard-card.interface';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import icAssignment from '@iconify/icons-ic/twotone-assignment';
import icAdd from '@iconify/icons-ic/twotone-add';
import { scrumboardLabels, scrumboardUsers } from '../../../../../../static-data/scrumboard';
import icDescription from '@iconify/icons-ic/twotone-description';
import icClose from '@iconify/icons-ic/twotone-close';
import { ScrumboardList } from '../../interfaces/scrumboard-list.interface';
import { Scrumboard } from '../../interfaces/scrumboard.interface';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icImage from '@iconify/icons-ic/twotone-image';
import { ScrumboardAttachment } from '../../interfaces/scrumboard-attachment.interface';
import icAttachFile from '@iconify/icons-ic/twotone-attach-file';
import icInsertComment from '@iconify/icons-ic/twotone-insert-comment';
import { DateTime } from 'luxon';
import { ScrumboardComment } from '../../interfaces/scrumboard-comment.interface';
import icStar from '@iconify/icons-ic/twotone-star';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'vex-scrumboard-dialog',
  templateUrl: './scrumboard-dialog.component.html',
  styleUrls: ['./scrumboard-dialog.component.scss']
})
export class ScrumboardDialogComponent implements OnInit {
  flag = 0;
  workerJob;
  currentUser;
  form = this.fb.group({
    title:null,
    client: null,
    department:null,
    role: null,
    shiftDate:null,
    startTime:null,
    endTime:null,
    locationShift:null,
    purchaseOrderNo: null,
    additionalInformation:null,
    statusStr:null,
    fulfilled:0,
    total:0,
    totalStaff:null,
    clientId:null,
    timesheetId:[],
    // cover: null,
    // attachments: this.fb.array([]),
    // comments: this.fb.array([]),
    users: [],
    // labels: []
  });

  commentCtrl = new FormControl();

  icAssignment = icAssignment;
  icDescription = icDescription;
  icClose = icClose;
  icAdd = icAdd;
  icMoreVert = icMoreVert;
  icDelete = icDelete;
  icImage = icImage;
  icAttachFile = icAttachFile;
  icInsertComment = icInsertComment;
  icStar = icStar;

  users = scrumboardUsers;
  labels = scrumboardLabels;
  id;
  list: ScrumboardList;
  board: Scrumboard;
  tempOWorker:any[];
  tempCWorker:any[];

  constructor(private dialogRef: MatDialogRef<ScrumboardDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: {
                card: any;
                list: ScrumboardList;
                board: Scrumboard;
              },
              private fb: FormBuilder,
              private authService:AuthService) { }

  ngOnInit() {
    if(!this.authService.currenctUser)
      this.authService.setCurrentUser();
    this.currentUser = this.authService.currenctUser;
    if(!this.authService.workerJobInfo)
      this.authService.setCurrentWorkerJob();
    this.workerJob = this.authService.workerJobInfo;
    this.list = this.data.list;
    this.board = this.data.board;
    
    const card = this.data.card;
    this.id = card.id
    console.log('****')
    console.log(card)
    console.log(this.workerJob)
    console.log('****')
    console.log(this.flag)
    var tempWorker = card.timesheetId;
    this.tempOWorker = card.timesheetId;
    this.tempCWorker = card.timesheetId;
    this.tempOWorker = this.tempOWorker.filter(obj => obj.workerId != this.currentUser._id);
    this.tempCWorker= this.tempCWorker.filter(obj => obj.workerId == this.currentUser._id);
    this.flag = tempWorker.filter(obj => obj.workerId === this.currentUser._id).length;
    console.log(this.flag)
    console.log(this.workerJob)
    this.form.valueChanges.subscribe(console.log);

    this.form.patchValue({
      title:card.title || null,
      client:card.client ||  null,
      department:card.department || null,
      role: card.role || null,
      shiftDate:card.shiftDate || null,
      startTime:card.startTime || null,
      endTime:card.endTime || null,
      locationShift:card.locationShift || null,
      purchaseOrderNo: card.purchaseOrderNo || null,
      additionalInformation:card.additionalInformation || null,
      statusStr:card.statusStr || null,
      fulfilled:card.fulfilled || 0,
      total:card.total || 0,
      totalStaff:card.totalStaff || null,
      clientId:card.clientId || null,
      timesheetId:this.tempOWorker|| [],
      users: card.users || [],
      // labels: card.labels || []
    });

    // this.form.setControl('attachments', this.fb.array(card.attachments || []));
    // this.form.setControl('comments', this.fb.array(card.comments || []));
  }
  save(){
    
  }
  save1() {
    // const comments = this.form.get('workerId') as FormArray;
    // comments.push(new FormControl({
    //  img:this.currentUser.profilePhoto,
    //  id:this.currentUser._id,
    //  name:this.currentUser.wokerId,
    // }));

    console.log('> save <')
    console.log(this.id)
    console.log(this.tempCWorker)
    if(this.tempCWorker.length > 0){  
      this.authService.removeTimesheetsJob(this.tempCWorker).subscribe((res)=>{
        console.log('.........../.././././')
        console.log(this.data.card.id)
        this.authService.setWorkerJob(this.id ,this.tempCWorker[0]._id,this.currentUser._id, this.currentUser.profilePhoto,this.currentUser.workerId,this.flag).subscribe((res)=>{
          console.log('>>>>>')
          console.log(res);
          this.authService.openSnackbar('Updated Succesfully');
        })
            this.dialogRef.close(this.form.value);
          })
    }else{
      this.authService.setWorkerJob(this.id ,-1,this.currentUser._id, this.currentUser.profilePhoto,this.currentUser.workerId,this.flag).subscribe((res)=>{
        console.log('>>>>>')
        console.log(res);
        this.authService.openSnackbar('Updated Succesfully');
      })
    }

    this.dialogRef.close(this.form.value);
  }

  isImageExtension(extension: string) {
    return extension === 'jpg' || extension === 'png';
  }

  makeCover(attachment: ScrumboardAttachment) {
    this.form.get('cover').setValue(attachment);
  }

  isCover(attachment: ScrumboardAttachment) {
    return this.form.get('cover').value === attachment;
  }

  remove(attachment: ScrumboardAttachment) {
    if (this.form.get('cover').value && attachment.id === this.form.get('cover').value.id) {
      this.form.get('cover').setValue(null);
    }

    this.form.setControl('attachments', this.fb.array(this.form.get('attachments').value.filter(a => a !== attachment)));
  }

  addComment() {
    if (!this.commentCtrl.value) {
      return;
    }

    const comments = this.form.get('comments') as FormArray;
    comments.push(new FormControl({
      from: {
        name: 'David Smith',
        imageSrc: 'assets/img/avatars/1.jpg'
      },
      message: this.commentCtrl.value,
      date: DateTime.local().minus({ seconds: 1 })
    } as ScrumboardComment));

    this.commentCtrl.setValue(null);
  }
  addJob(){
    if(this.flag ==0 ){
      this.flag ++;
      // this.form.setControl('timesheetId', this.fb.array(this.form.get('timesheetId').value.filter(a => a !== timesheetId)));

    }
    else 
      this.flag = 0;
  }
}
