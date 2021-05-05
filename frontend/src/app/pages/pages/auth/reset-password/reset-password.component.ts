import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import icMail from '@iconify/icons-ic/twotone-mail';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
@Component({
  selector: 'vex-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  animations: [fadeInUp400ms]
})
export class ResetPasswordComponent implements OnInit {
  inputType = 'password';
  visible = false;
  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff
  form = this.fb.group({
    hash: ['', Validators.required],
    passwordConfirm: ['', Validators.required],
  });
  private sub: any;
  icMail = icMail;
  token;
  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
    private activeRoute:ActivatedRoute,
  private fb: FormBuilder,
    private auth:AuthService
  ) { }

  ngOnInit() {
    this.sub = this.activeRoute.queryParams.subscribe(params => {
       this.token = params['accessToken']; // (+) converts string 'id' to a number
    });
  }
  checkPassword(pass, confirmPass){
    if(pass == confirmPass)
      return true;
    return false;
  }
  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
  send() {
    const controls = this.form.controls;
    var hash = controls.hash.value
    if(hash.length < 8){
      this.auth.openSnackbar('Please choose a stronger password. Minimum 8 characters.');
      return ;
    }
    if(this.checkPassword(controls.passwordConfirm.value , controls.hash.value) == false)
      {
      this.auth.openSnackbar('Input Password & Confirm Password Do Not Match');
      return ;
      }
    var obj = {
      token : this.token,
      hash : controls.hash.value,
    };
    if(controls.hash.value != ''){
      this.auth.resetPassword(obj).subscribe((res)=>{
        this.auth.openSnackbar('Sucessfully Changed Password');
        this.router.navigate(['/login']);
      })
    }
    else{
      this.auth.openSnackbar('You have to Input Password');
      this.router.navigate(['/']);
    }
  }
}
