import { Component, OnInit, TemplateRef } from '@angular/core';
import { ScrumboardList } from './interfaces/scrumboard-list.interface';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ScrumboardCard } from './interfaces/scrumboard-card.interface';
// import { trackById } from '../../../../@vex/utils/track-by';
import { scrumboards, scrumboardUsers } from '../../../../static-data/scrumboard';
import icNotifications from '@iconify/icons-ic/twotone-notifications';
import icInsertComment from '@iconify/icons-ic/twotone-insert-comment';
import icAttachFile from '@iconify/icons-ic/twotone-attach-file';
import { MatDialog } from '@angular/material/dialog';
import { ScrumboardDialogComponent } from './components/scrumboard-dialog/scrumboard-dialog.component';
import { filter, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Scrumboard } from './interfaces/scrumboard.interface';
import icAdd from '@iconify/icons-ic/twotone-add';
import { PopoverService } from '../../../../@vex/components/popover/popover.service';
import icClose from '@iconify/icons-ic/twotone-close';
import { FormControl } from '@angular/forms';
import icEdit from '@iconify/icons-ic/twotone-edit';
import { stagger80ms } from '../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'vex-admin-job',
  templateUrl: './admin-job.component.html',
  styleUrls: ['./admin-job.component.scss'],
  animations: [
    stagger80ms,
    fadeInUp400ms
  ]
})
export class AdminJobComponent implements OnInit {

  static nextId = 100;
  currentJob = this.authService.currentJob;
  currentScrum: any;
  board: any;

  addCardCtrl = new FormControl();
  // addListCtrl = new FormControl();

  // trackById = trackById;
  icNotifications = icNotifications;
  icInsertComment = icInsertComment;
  icAttachFile = icAttachFile;
  icAdd = icAdd;
  icClose = icClose;
  icEdit = icEdit;
  fulfilled;
  // scrumboardUsers;

  constructor(private dialog: MatDialog,
              private route: ActivatedRoute,
              private popover: PopoverService,
              private authService: AuthService) {
    console.log('admin job scrumboard construct');

              }

  ngOnInit() {
    console.log('admin job scrumboard ng on int');
    // if (!this.authService.currentScrumboard){
    this.authService.setCurrentScrumboard();
    this.currentScrum = this.authService.currentScrumboard;
    // }
    console.log('scrumboard', this.currentScrum);
    this.currentScrum.forEach(element => {
      if (element.title === this.currentJob.department){
        this.board = element;
      }
    });
    // this.board$ =  this.route.paramMap.pipe(
    //   map(paramMap => +paramMap.get('scrumboardId')),
    //   map(scrumboardId => this.authService.currentScrumboard.find(board => board.id === scrumboardId))
    // );

    console.log('board', this.board);
  }

  open() {
    console.log('card cliked');
    this.addCardCtrl.setValue(null);

    this.dialog.open(ScrumboardDialogComponent, {
      data: this.currentJob ,
      width: '700px',
      maxWidth: '100%',
      disableClose: true
    });
    // .beforeClosed().pipe(
    //   filter<ScrumboardCard>(Boolean)
    // ).subscribe(value => {
    //   console.log(value);
    //   const index = list.children.findIndex(child => child.id === card.id);
    //   if (index > -1) {
    //     list.children[index] = value;
    //   }
    // });
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      // alert('1')
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // alert('2')
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        // alert(event.container.id)
      this.authService.setStatusJob(event.container.data[0].id, event.container.id).subscribe((res) => {
          console.log(res);
          this.authService.openSnackbar('status has updated successfully');
        });
        // console.log('^&^&^&')
        // console.log(event.container)
      }
  }

  dropList(event: CdkDragDrop<ScrumboardList[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  getConnectedList(board: Scrumboard) {
    return board.children.map(x => `${x.id}`);
  }

  openAddCard(list: ScrumboardList, content: TemplateRef<any>, origin: HTMLElement) {
    this.popover.open({
      content,
      origin,
      position: [
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'bottom'
        },
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
        },
      ]
    });
  }

  openAddList(board: Scrumboard, content: TemplateRef<any>, origin: HTMLElement) {
    this.popover.open({
      content,
      origin,
      position: [
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top'
        },
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
        },
      ]
    });
  }

  createCard(list: ScrumboardList, close: () => void) {
    if (!this.addCardCtrl.value) {
      return;
    }

    list.children.push({
      id: AdminJobComponent.nextId++,
      title: this.addCardCtrl.value
    });

    close();

    this.addCardCtrl.setValue(null);
  }

  // createList(board: Scrumboard, close: () => void) {
  //   if (!this.addListCtrl.value) {
  //     return;
  //   }

  //   board.children.push({
  //     id: AdminJobComponent.nextId++,
  //     label: this.addListCtrl.value,
  //     children: []
  //   });

  //   close();

  //   this.addListCtrl.setValue(null);
  // }


}
