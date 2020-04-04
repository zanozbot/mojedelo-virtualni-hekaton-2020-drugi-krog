import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import LocalStorageUtil from '../utils/local-storage.util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(): boolean {
    if (!LocalStorageUtil.getIsAdmin()) {
      this.router.navigate(['/prijava']);
      return false;
    }

    return true;
  }

}
