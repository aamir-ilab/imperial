import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ScrumboardCard } from '../../interfaces/scrumboard-card.interface';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import icAssignment from '@iconify/icons-ic/twotone-assignment';
import icAdd from '@iconify/icons-fa-solid/plus-square';
import icMinus from '@iconify/icons-fa-solid/minus-square';
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

  form = this.fb.group({
    title: null,
    client: null,
    department: null,
    role: null,
    shiftDate: null,
    startTime: null,
    endTime: null,
    locationShift: null,
    purchaseOrderNo: null,
    additionalInformation: null,
    statusStr: null,
    fulfilled: 0,
    total: 0,
    totalStaff: null,
    clientId: null,
    timesheetId: [],
  });

  roles: any;
  commentCtrl = new FormControl();
  originalTimesheets: any[] = [];
  icAssignment = icAssignment;
  icDescription = icDescription;
  icClose = icClose;
  icAdd = icAdd;
  icMinus = icMinus;
  icMoreVert = icMoreVert;
  icDelete = icDelete;
  icImage = icImage;
  icAttachFile = icAttachFile;
  icInsertComment = icInsertComment;
  icStar = icStar;
  jobId;
  // users = scrumboardUsers;
  labels = scrumboardLabels;
  _workers: any;
  list: any;
  // list: ScrumboardList;
  // board: Scrumboard;
  fulfilled;
  newWorkerId: any;
  oldWorkerId: any;
  wokersSelect: any = [];
  totalworkers: [];
  checked = false;
  constructor(private dialogRef: MatDialogRef<ScrumboardDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: {
              },
              private fb: FormBuilder,
              private authService: AuthService) { }

  async ngOnInit() {
    if (!this.authService.AllUser){
      await this.authService.getAllUserAuth();
    }
    const tempArr = this.authService.AllUser;
    this._workers = [];
    tempArr.forEach(obj => {
        if (obj.accountType === 'Worker') {
          this._workers.push({profilePhoto: obj.profilePhoto, name: `${obj.forename} ${obj.surename}`, workerId: obj.workerId, emailAddress: obj.emailAddress, id: obj._id});
        }
      });
    console.log('this._workers', this._workers);

    console.log('this.data', this.data);
    this.list = this.data;
    this.form = this.fb.group({
      workers: this.fb.array([])
    });

    this.assignWorkers();

    if (this.list.title === 'Housekeeping'){
      this.roles = [
        {
          value: 'Linen Porter',
          label: 'Linen Porter'
        },
        {
          value: 'Floor Porter',
          label: 'Floor Porter'
        },
        {
          value: 'Floor Supervisor',
          label: 'Floor Supervisor'
        },
        {
          value: 'Room Supervisor',
          label: 'Room Supervisor'
        },
        {
          value: 'Evening Room Attendant',
          label: 'Evening Room Attendant'
        },
        {
          value: 'Public Area Attendant',
          label: 'Public Area Attendant'
        },
        {
          value: 'Spa Attendant',
          label: 'Spa Attendant'
        },
        {
          value: 'Valet',
          label: 'Valet'
        },
        {
          value: 'Housekeeper',
          label: 'Housekeeper'
        }
      ];
    }
    else if (this.list.title === 'Food and Beverage') {
      this.roles = [
        {
          value: 'Waiters',
          label: 'Waiters'
        },
        {
          value: 'Night Waiters',
          label: 'Night Waiters'
        },
        {
          value: 'Night Room Service',
          label: 'Night Room Service'
        },
        {
          value: 'Supervisor Banqueting',
          label: 'Supervisor Banqueting'
        },
        {
          value: 'Team Leader',
          label: 'Team Leader'
        },
        {
          value: 'Silver Service Waiters',
          label: 'Silver Service Waiters'
        },
        {
          value: 'Bar Staff',
          label: 'Bar Staff'
        },
        {
          value: 'Cloakroom',
          label: 'Cloakroom'
        },
        {
          value: 'Concierge',
          label: 'Concierge'
        },
        {
          value: 'Hostess',
          label: 'Hostess'
        }
      ];
    }
    else{
      this.roles = [
        {
          value: 'Kitchen Porter',
          label: 'Kitchen Porter'
        },
        {
          value: 'Night Kitchen Porter',
          label: 'Night Kitchen Porter'
        },
        {
          value: 'Night Cleaners',
          label: 'Night Cleaners'
        },
        {
          value: 'Supervisor BOH (Back of House)',
          label: 'Supervisor BOH (Back of House)'
        },
        {
          value: 'Food Runners',
          label: 'Food Runners'
        },
        {
          value: 'Breakfast Runners',
          label: 'Breakfast Runners'
        },
        {
          value: 'Commis Chef',
          label: 'Commis Chef'
        },
        {
          value: 'Breakfast Chef',
          label: 'Breakfast Chef'
        },
        {
          value: 'Chef De Partie',
          label: 'Chef De Partie'
        },
        {
          value: 'Pastry Chef',
          label: 'Pastry Chef'
        },
        {
          value: 'Banqueting Porter',
          label: 'Banqueting Porter'
        }
      ];
    }
  }
  get workers() { return this.form.controls.workers as FormArray; }

  assignWorkers() {
    for (let index = 0; index < this.list.shift.total; index++) {
      this.workers.push(this.patchValues(this.list.shift.workers[index]));
    }
  }

  patchValues(x) {
    return this.fb.group({
      role: [x.role],
      startTime: [x.startTime],
      endTime: [x.endTime],
      workerId: [x.workerId]
    });
  }

  addShift(){
    this.workers.push(this.fb.group({
      role: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      total: ['', [Validators.required, Validators.min(1)]],
      workerId: ['']
    }));
    console.log('addShift', this.workers);
  }
  removeShift(index){
    this.workers.removeAt(index);
    console.log('removeShift', index, this.workers);
  }

  save() {
    const workers = this.form.value.workers;
    console.log('workers', workers);
    this.authService.setJobWorkers(this.list.id, this.list.shift._id,workers).subscribe((res) => {
      if (this.checked === true) {
        this.authService.sendShiftEmail(workers, this.list).subscribe((sendemail_res) => {
          this.authService.openSnackbar('Shift Detail Sent to workers');
        });
        // workers.forEach(worker => {
        //   if(worker.workerId !== null){
        //     const found = this._workers.find(x => x.id === worker.workerId);
        //     console.log('worker', worker);
        //     console.log('found', found);
        //     const shiftDate = moment(moment(this.list.shiftDate)).format('DD-MM-YYYY');

        //     const obj = {
        //       content: 'content',
        //       subject : 'You have been assigned a new shift (ID #' + this.list.id + ')',
        //       name : found.name,
        //       email: found.emailAddress,
        //       // content: `You have been assigned a shift with ${this.list.clientId.firstName} ${this.list.clientId.lastName} <br/><br/>`+`Please read the shift details carefully below. If you have any questions relating to the shift, or if you’re unable to attend this shift, please contact Imperial Recruitment as soon as possible on 020 7436 7424.<br/><br/>`+
        //       // `<span style="font-weight: bold;">Shift Date:</span><span> ${shiftDate} </span><br/>
        //       // <span style="font-weight: bold;">Shift start time:</span><span> ${worker.startTime} – ${worker.endTime}</span><br/>
        //       // <span style="font-weight: bold;">Role: </span><span>${worker.role}</span><br/>`
        //       // +'LOGIN TO PORTAL'+ `\n http://imperial-recruitment.herokuapp.com/#/login`
        //     };
        //     console.log('email obj', obj);
        //     this.authService.sendEmail(obj).subscribe((sendemail_res) => {
        //       this.authService.openSnackbar('Shift Detail Sent to workers');
        //     });
        //   }

        // });
      }

      this.dialogRef.close(res);
    })
  }
  sendEmail(sendEmail){
    console.log('send email', sendEmail);
  }
//   save() {
//     console.log('.........../.././././');
//     // console.log(this.data.card.timesheetId[0].JobId)
//     console.log(this.newWorkerId);
//     if (this.originalTimesheets.length > 0){
//     this.authService.removeTimesheetsJob(this.originalTimesheets).subscribe((res) => {
//       console.log(this.data.card.timesheetId);
//       console.log(this.data.card.id);
//       this.authService.setJobWorkers(this.newWorkerId, this.data.card.id).subscribe((res) => {
//             // this.authService.setJobWorkers(JSON.stringify(this.newWorkerId)).subscribe((res)=>{
//             console.log('setJobWOrker');
//             console.log(res);
//           });
//       this.dialogRef.close(this.form.value);
//         });
//     }
//     else{
//       console.log('./.././././');
//       console.log(this.newWorkerId);
//       console.log(this.data.card.id);
//       this.authService.setJobWorkers(this.newWorkerId, this.data.card.id).subscribe((res) => {
//       // this.authService.setJobWorkers(JSON.stringify(this.newWorkerId)).subscribe((res)=>{
//       console.log('setJobWOrker');
//       console.log(res);
//       this.authService.openSnackbar('updated Successfully');
//     });
//       this.dialogRef.close(this.form.value);
//     }
//     this.authService.openSnackbar('updated Successfully');
//     const controls = this.form.controls;
//     const resultArr = this.oldWorkerId.filter(({ id: id1 }) => !this.newWorkerId.some(({ id: id2 }) => id2 === id1));
//     if (resultArr.length > 0){
//       resultArr.forEach(elementR => {
//         const obj = {
//         subject : 'Your shift has been cancelled  ' + this.data.card.timesheetId[0].JobId,
//         name : elementR.workerId.forename + ' ' + elementR.workerId.surename,
//         email: elementR.workerId.emailAddress,
//         content1: `Your shift with ${this.data.card.clientId.firstName} ${this.data.card.clientId.lastName} has been cancelled.`,
//         content2: `We are sorry for any inconvenience this may have caused.`,
//         content3: `If you have any questions, please feel free to contact us.`,
//         btn: 'LOGIN TO PORTAL',
//         btn_link: 'http://imperial-recruitment.herokuapp.com/#/login',
//         link: ''
//       };
//         console.log('obj');
//         console.log(obj);
//         this.authService.sendEmail(obj).subscribe((sendemail_res) => {
//         console.log('crate job email');
//     });
// });
//     }
//     this.newWorkerId.forEach(element => {
//             const obj = {
//             subject : 'You have been assigned a new shift ' + this.data.card.timesheetId[0].JobId,
//             name : element.name,
//             email: element.emailAddress,
//             content1: `You have been assigned a shift with ${this.data.card.clientId.firstName} ${this.data.card.clientId.lastName} `,
//             content2: `Please read the shift details carefully below. If you have any questions relating to the shift, or if you’re unable to attend this shift, please contact Imperial Recruitment as soon as possible on 020 7436 7424.`,
//             content3: `<span>Shift Date: ${controls.shiftDate.value} </span><br/>
//             <span>Shift start time: ${controls.startTime.value} – ${controls.endTime.value}</span><br/>
//             <span>Role: ${controls.role.value}</span><br/>`,
//             btn: 'LOGIN TO PORTAL',
//             btn_link: 'http://imperial-recruitment.herokuapp.com/#/login',
//             link: ''
//           };
//             console.log('obj');
//             console.log(obj);
//             this.authService.sendEmail(obj).subscribe((sendemail_res) => {
//             console.log('crate job email');
//         });
//     });
//   }

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
