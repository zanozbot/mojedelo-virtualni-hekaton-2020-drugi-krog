import { Submission } from '../models/submission.model';

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

}
