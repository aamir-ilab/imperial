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
import { formatDate } from '@angular/common';

@Component({
  selector: 'vex-scrumboard-dialog',
  templateUrl: './scrumboard-dialog.component.html',
  styleUrls: ['./scrumboard-dialog.component.scss']
})
export class ScrumboardDialogComponent implements OnInit {

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
  originalTimesheets:any[] = [];
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
  jobId;
  // users = scrumboardUsers;
  labels = scrumboardLabels;
  workerId:any;
  list: ScrumboardList;
  board: Scrumboard;
  fulfilled;
  newWorkerId:any;
  oldWorkerId:any;
  wokersSelect:any = [];
  constructor(private dialogRef: MatDialogRef<ScrumboardDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: {
                card: any;
                list: ScrumboardList;
                board: Scrumboard;
              },
              private fb: FormBuilder,
              private authService:AuthService) { }

  async ngOnInit() {
    if(!this.authService.AllUser){
      await this.authService.getAllJobAuth();
    }
    console.log('<><><><><><><><><><><<><><><><><><><><>')
    console.log(this.authService.AllUser)
    var tempArr = this.authService.AllUser;
    this.workerId = [];
    tempArr.forEach(obj =>{
      if(obj.accountType == 'Worker')
        this.workerId.push({profilePhoto:obj.profilePhoto, name:`${obj.forename} ${obj.surename}`,workerId:obj.workerId,emailAddress:obj.emailAddress, id:obj._id});
    });
    console.log(this.workerId)
    console.log(this.data.card)
    // tempArr.filter(obj => if(obj.accountType == 'Worker'){ return {profilePhoto:obj.profilePhoto, };});
    this.list = this.data.list;
    this.board = this.data.board;
    const card = this.data.card;
    this.fulfilled = card.timesheetId.length;
    this.originalTimesheets = card.timesheetId;
    // this.workerId = card.workerId;
    this.newWorkerId = [];
    this.oldWorkerId = [];
    card.timesheetId.forEach(element => {
      this.newWorkerId.push({profilePhoto:element.profilePhoto, workerId:element.workerId, id:element.id});
      this.oldWorkerId.push({profilePhoto:element.profilePhoto, workerId:element.workerId, id:element.id});
    });
    var shiftDateStr = formatDate(new Date(card.shiftDate), 'yyyy-MM-dd','en').toString();
    console.log(card)
    console.log(this.workerId)
    this.form.valueChanges.subscribe(console.log);

    this.form.patchValue({
      title:card.title || null,
      client:card.client ||  null,
      department:card.department || null,
      role: card.role || null,
      shiftDate: shiftDateStr || null,
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
      timesheetId:this.newWorkerId|| [],
      users: card.users || [],
      // labels: card.labels || []
    });

    // this.form.setControl('attachments', this.fb.array(card.attachments || []));
    // this.form.setControl('comments', this.fb.array(card.comments || []));
  }

  save() {
    console.log('.........../.././././')
    // console.log(this.data.card.timesheetId[0].JobId)
    console.log(this.newWorkerId)
    if(this.originalTimesheets.length > 0){
    this.authService.removeTimesheetsJob(this.originalTimesheets).subscribe((res)=>{
      console.log(this.data.card.timesheetId)
      console.log(this.data.card.id)
                this.authService.setJobWorkers(this.newWorkerId,this.data.card.id).subscribe((res)=>{
            // this.authService.setJobWorkers(JSON.stringify(this.newWorkerId)).subscribe((res)=>{
            console.log('setJobWOrker')
            console.log(res)
          })
          this.dialogRef.close(this.form.value);
        })
    }
    else{
      console.log('./.././././')
      console.log(this.newWorkerId)
      console.log(this.data.card.id)
        this.authService.setJobWorkers(this.newWorkerId,this.data.card.id).subscribe((res)=>{
      // this.authService.setJobWorkers(JSON.stringify(this.newWorkerId)).subscribe((res)=>{
      console.log('setJobWOrker')
      console.log(res)
      this.authService.openSnackbar('updated Successfully')
    })
    this.dialogRef.close(this.form.value);
    }
    this.authService.openSnackbar('updated Successfully')
    const controls = this.form.controls;
    const resultArr = this.oldWorkerId.filter(({ id: id1 }) => !this.newWorkerId.some(({ id: id2 }) => id2 === id1));
    if(resultArr.length > 0){
      resultArr.forEach(elementR => {
        var obj = {
        subject : "Your shift has been cancelled  " + this.data.card.timesheetId[0].JobId,
        name : elementR.workerId.forename + ' ' + elementR.workerId.surename,
        email: elementR.workerId.emailAddress,
        content1: `Your shift with ${this.data.card.clientId.firstName} ${this.data.card.clientId.lastName} has been cancelled.`,
        content2: `We are sorry for any inconvenience this may have caused.`,
        content3:`If you have any questions, please feel free to contact us.`,
        btn:'LOGIN TO PORTAL',
        btn_link:'http://imperial-recruitment.herokuapp.com/#/login',
        link:''
      };
      console.log('obj');
      console.log(obj)
      this.authService.sendEmail(obj).subscribe((sendemail_res)=>{
        console.log('crate job email')
    })
});  
    }
    this.newWorkerId.forEach(element => {
            var obj = {
            subject : "You have been assigned a new shift " + this.data.card.timesheetId[0].JobId,
            name : element.name,
            email: element.emailAddress,
            content1: `You have been assigned a shift with ${this.data.card.clientId.firstName} ${this.data.card.clientId.lastName} `,
            content2: `Please read the shift details carefully below. If you have any questions relating to the shift, or if you’re unable to attend this shift, please contact Imperial Recruitment as soon as possible on 020 7436 7424.`,
            content3:`<span>Shift Date: ${controls.shiftDate.value} </span><br/>
            <span>Shift start time: ${controls.startTime.value} – ${controls.endTime.value}</span><br/>
            <span>Role: ${controls.role.value}</span><br/>`,
            btn:'LOGIN TO PORTAL',
            btn_link:'http://imperial-recruitment.herokuapp.com/#/login',
            link:''
          };
          console.log('obj');
          console.log(obj)
          this.authService.sendEmail(obj).subscribe((sendemail_res)=>{
            console.log('crate job email')
        })
    });  
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
  onWorker(ev){
    // console.log('//////')
    // console.log(ev)
    this.fulfilled = ev.value.length;
    // console.log(this.newWorkerId);
    // console.log(this.workerId);
  }
}
