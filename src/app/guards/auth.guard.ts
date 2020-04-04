import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import LocalStorageUtil from '../utils/local-storage.util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  /**
   * The route can only be activated if there is a valid key 'jeAdmin'
   * in the localStorage
   */
  canActivate(): boolean {
    if (!LocalStorageUtil.getIsAdmin()) {
      this.router.navigate(['/prijava']);
      return false;
    }

    return true;
  }

}
