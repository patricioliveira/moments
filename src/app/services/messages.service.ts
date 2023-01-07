import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message: string = '';

  constructor(private router: Router) { }

  add(message: string) {
    this.message = message;

    setTimeout(() => {
      this.clear(), this.recharge()
    }, 2500)

    this.router.getCurrentNavigation();
  }

  clear() {
    this.message = '';
  }

  recharge() {
    window.location.reload();
  }
}
