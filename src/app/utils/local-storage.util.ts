import { Submission } from '../models/submission.model';
import * as moment from 'moment';

export default class LocalStorageUtil {

  private static LOCAL_STORAGE_KEY = 'spletna_aplikacija_mojedelo';

  public static insertSubmission(submission: Submission) {
    let submissions = this.getSubmissions();

    if (submissions == null) {
      submissions = [submission];
    } else {
      submissions.push(submission);
    }

    localStorage.setItem(`${this.LOCAL_STORAGE_KEY}_vloge`, JSON.stringify(submissions));
  }

  public static getSubmissions(): Submission[] {
    return JSON.parse(localStorage.getItem(`${this.LOCAL_STORAGE_KEY}_vloge`));
  }

  public static getIsAdmin(): boolean {
    const isAdmin = localStorage.getItem(`${this.LOCAL_STORAGE_KEY}_jeAdmin`);

    if (isAdmin == null) {
      return false;
    }

    return moment.utc(isAdmin).isAfter(moment.utc().subtract(24, 'hours'));
  }

  public static setIsAdmin() {
    localStorage.setItem(`${this.LOCAL_STORAGE_KEY}_jeAdmin`, this.getCurrentISODate());
  }

  public static getCurrentISODate(): string {
    return moment.utc().toISOString();
  }

}
