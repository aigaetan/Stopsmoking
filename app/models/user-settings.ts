import { Observable } from '@nativescript/core';

export class UserSettings extends Observable {
  private static instance: UserSettings;
  private _cigarettesPerDay: number = 20;
  private _cigarettesPerPack: number = 20;
  private _pricePerPack: number = 10;
  private _quitDate: Date = new Date();
  private _savedMoney: number = 0;
  private _completedChallenges: number[] = [];

  private constructor() {
    super();
  }

  public static getInstance(): UserSettings {
    if (!UserSettings.instance) {
      UserSettings.instance = new UserSettings();
    }
    return UserSettings.instance;
  }

  get cigarettesPerDay(): number {
    return this._cigarettesPerDay;
  }

  set cigarettesPerDay(value: number) {
    if (this._cigarettesPerDay !== value) {
      this._cigarettesPerDay = value;
      this.notifyPropertyChange('cigarettesPerDay', value);
    }
  }

  get pricePerPack(): number {
    return this._pricePerPack;
  }

  set pricePerPack(value: number) {
    if (this._pricePerPack !== value) {
      this._pricePerPack = value;
      this.notifyPropertyChange('pricePerPack', value);
    }
  }

  get quitDate(): Date {
    return this._quitDate;
  }

  set quitDate(value: Date) {
    if (this._quitDate !== value) {
      this._quitDate = value;
      this.notifyPropertyChange('quitDate', value);
    }
  }

  get savedMoney(): number {
    return this._savedMoney;
  }

  set savedMoney(value: number) {
    if (this._savedMoney !== value) {
      this._savedMoney = value;
      this.notifyPropertyChange('savedMoney', value);
    }
  }

  get completedChallenges(): number[] {
    return this._completedChallenges;
  }

  addCompletedChallenge(challengeId: number) {
    if (!this._completedChallenges.includes(challengeId)) {
      this._completedChallenges.push(challengeId);
      this.notifyPropertyChange('completedChallenges', this._completedChallenges);
    }
  }

  calculateDailySpending(): number {
    return (this._cigarettesPerDay / this._cigarettesPerPack) * this._pricePerPack;
  }

  calculateTotalSaved(): number {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - this._quitDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays * this.calculateDailySpending();
  }
}