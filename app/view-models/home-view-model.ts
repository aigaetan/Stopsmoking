import { Observable } from '@nativescript/core';
import { UserSettings } from '../models/user-settings';
import { Challenge, challenges } from '../models/challenge';

export class HomeViewModel extends Observable {
  private userSettings: UserSettings;
  private _challenges: Challenge[];

  constructor() {
    super();
    this.userSettings = UserSettings.getInstance();
    this._challenges = challenges;
  }

  get moneySaved(): string {
    return this.userSettings.calculateTotalSaved().toFixed(2);
  }

  get daysSinceQuit(): number {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - this.userSettings.quitDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  get challenges(): Challenge[] {
    return this._challenges;
  }

  completeChallenge(challengeId: number) {
    const challenge = this._challenges.find(c => c.id === challengeId);
    if (challenge && !challenge.completed) {
      challenge.completed = true;
      this.userSettings.savedMoney += challenge.reward;
      this.userSettings.addCompletedChallenge(challengeId);
      this.notifyPropertyChange('challenges', this._challenges);
    }
  }
}