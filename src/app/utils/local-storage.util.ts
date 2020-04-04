import { Submission } from '../models/submission.model';
import * as moment from 'moment';

export default class LocalStorageUtil {

  private static LOCAL_STORAGE_KEY = 'spletna_aplikacija_mojedelo';

  /**
   * Inserts newly added submission into localStorage
   *
   * @param submission A submission
   */
  public static insertSubmission(submission: Submission) {
    const submissions = this.getSubmissions();

    submissions.push(submission);

    localStorage.setItem(`${this.LOCAL_STORAGE_KEY}_vloge`, JSON.stringify(submissions));
  }

  /**
   * Updates the localStorage with new data
   *
   * @param submissions Array of submissions
   */
  public static updateSubmissions(submissions: Submission[]) {
    localStorage.setItem(`${this.LOCAL_STORAGE_KEY}_vloge`, JSON.stringify(submissions));
  }

  /**
   * Returs an array of all submissions from localStorage
   */
  public static getSubmissions(): Submission[] {
    return JSON.parse(localStorage.getItem(`${this.LOCAL_STORAGE_KEY}_vloge`)) || [];
  }

  /**
   * Checks if an admin is currently logged in and if its session is valid
   */
  public static getIsAdmin(): boolean {
    const isAdmin = localStorage.getItem(`${this.LOCAL_STORAGE_KEY}_jeAdmin`);

    if (isAdmin == null) {
      return false;
    }

    return this.isSessionValid(isAdmin);
  }

  /**
   * Sets the 'jeAdmin' key to localStorage with current date as its value
   */
  public static setIsAdmin() {
    localStorage.setItem(`${this.LOCAL_STORAGE_KEY}_jeAdmin`, this.getCurrentISODate());
  }

  /**
   * Returns the current date in ISO format
   */
  public static getCurrentISODate(): string {
    return moment.utc().toISOString();
  }

  /**
   * Checks if current value of a key 'jeAdmin' is still valid
   *
   * @param isAdmin Current date from 'jeAdmin' key from localStorage
   */
  public static isSessionValid(isAdmin: string) {
    return moment.utc(isAdmin).isAfter(moment.utc().subtract(24, 'hours'));
  }

  /**
   * Returns the current session of the admin
   */
  public static getSession(): any {
    const isAdmin = localStorage.getItem(`${this.LOCAL_STORAGE_KEY}_jeAdmin`);

    moment.locale('sl');

    return { valid: this.isSessionValid(isAdmin), time: moment.utc().to(moment.utc(isAdmin).add(24, 'hours')) };
  }

  /**
   * Updates a submission
   *
   * @param id Id of a submission
   * @param rating Newly picked rating for the submission
   */
  public static updateSubmissionRatingById(id: string, rating: number) {
    const submissions = this.getSubmissions();

    const index = submissions.findIndex(submission => submission.id === id);

    submissions[index].rating = rating;

    this.updateSubmissions(submissions);
  }

}
