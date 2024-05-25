import { Component, Input, OnDestroy, OnInit, input } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss',
})
export class CountdownComponent implements OnInit, OnDestroy {
  constructor() {}

  @Input() set dDay(daDay: Date) {
    this._dDay = daDay;
  }

  private subscription: Subscription = new Subscription();
  private _dDay: Date;
  private millisecondsInSecond: number = 1000;
  private secondsInMinute: number = 60;
  private minutesInHour: number = 60;
  private hoursInDay: number = 24;

  public timeDiff: number;
  public seconds: number;
  public minutes: number;
  public hours: number;
  public days: number;
  ngOnInit(): void {
    this.subscription.add(
      interval(1000).subscribe(() => {
        this.getTimeDiff();
      })
    );
  }

  private getTimeDiff(): void {
    this.timeDiff = new Date(this._dDay).getTime() - new Date().getTime();
    this.setTimeUnits(this.timeDiff);
  }

  private setTimeUnits(timeDiff: number): void {
    this.seconds = Math.floor(
      (timeDiff / this.millisecondsInSecond) % this.secondsInMinute
    );
    this.minutes = Math.floor(
      (timeDiff / (this.millisecondsInSecond * this.minutesInHour)) %
        this.minutesInHour
    );
    this.hours = Math.floor(
      (timeDiff /
        (this.millisecondsInSecond *
          this.minutesInHour *
          this.secondsInMinute)) %
        this.hoursInDay
    );
    this.days = Math.floor(
      timeDiff /
        (this.millisecondsInSecond *
          this.minutesInHour *
          this.secondsInMinute *
          this.hoursInDay)
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
