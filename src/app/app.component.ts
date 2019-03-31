import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Barnes & Associates CRM';

  notificationsOptions = {
    animate: 'scale',
    clickToClose: true,
    timeOut: 2000,
    preventLastDuplicates: 'visible',
    pauseOnHover: true,
    showProgressBar: false,
    position: ['bottom', 'right'],
    closeButton: true
  };
}
