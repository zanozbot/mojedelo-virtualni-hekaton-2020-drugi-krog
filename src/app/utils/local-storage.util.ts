import { Submission } from '../models/submission.model';
import * as moment from 'moment';

export default class LocalStorageUtil {

  private static LOCAL_STORAGE_KEY = 'spletna_aplikacija_mojedelo';

  public static insertSubmission(submission: Submission) {
    const submissions = this.getSubmissions();

    submissions.push(submission);

    localStorage.setItem(`${this.LOCAL_STORAGE_KEY}_vloge`, JSON.stringify(submissions));
  }

  public static getSubmissions(): Submission[] {
    return JSON.parse(localStorage.getItem(`${this.LOCAL_STORAGE_KEY}_vloge`)) || [];
  }

  public static getIsAdmin(): boolean {
    const isAdmin = localStorage.getItem(`${this.LOCAL_STORAGE_KEY}_jeAdmin`);

    if (isAdmin == null) {
      return false;
    }

    return this.isSessionValid(isAdmin);
  }

  public static setIsAdmin() {
    localStorage.setItem(`${this.LOCAL_STORAGE_KEY}_jeAdmin`, this.getCurrentISODate());
  }

  public static getCurrentISODate(): string {
    return moment.utc().toISOString();
  }

  public static isSessionValid(isAdmin: string) {
    return moment.utc(isAdmin).isAfter(moment.utc().subtract(24, 'hours'));
  }

  public static getSession(): any {
    const isAdmin = localStorage.getItem(`${this.LOCAL_STORAGE_KEY}_jeAdmin`);

    moment.locale('sl');

    return { valid: this.isSessionValid(isAdmin), time: moment.utc().to(moment.utc(isAdmin).add(24, 'hours')) };
  }

}
