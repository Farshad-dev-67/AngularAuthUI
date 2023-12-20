import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ResetPasswordService } from 'src/app/services/reset-password.service';

@Component({
  selector: 'app-send-link-email',
  templateUrl: './send-link-email.component.html',
  styleUrls: ['./send-link-email.component.scss']
})
export class SendLinkEmailComponent {
  resetPasswordEmail!: string;
  isValidEmail!: boolean;
  resetEmail!: string;
  constructor(private resetPasswordService: ResetPasswordService,
    private toast: NgToastService) { }
  emailChecker(event: string): any {
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/);
    this.isValidEmail = emailRegex.test(event);
    if (this.isValidEmail) {
      this.resetEmail = event;
    }
  }
  confirmEmail() {
    this.resetPasswordService.sendResetPasswordLink(this.resetEmail)
      .subscribe({
        next: () => {
          this.toast.success({ detail: "SUCCESS", summary: 'Reset Success!!', duration: 3000, position: 'topRight' });
          this.resetEmail = '';
          const closeBtn = document.getElementById('close_modal');
          closeBtn?.click();
        },
        error: () => {
          this.toast.error({ detail: "Error", summary: 'Reset Error!!', duration: 3000, position: 'topRight' });
        }
      });
  }
}
