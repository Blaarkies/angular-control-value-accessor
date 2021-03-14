import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BasicValueAccessor } from '../../common/domain/basic-value-accessor';
import { BehaviorSubject, Subject, timer } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { PuzzleTile } from '../../common/domain/puzzle-tile';

@Component({
  selector: 'app-input-puzzle',
  templateUrl: './input-puzzle.component.html',
  styleUrls: ['./input-puzzle.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputPuzzleComponent),
    multi: true,
  }],
})
export class InputPuzzleComponent extends BasicValueAccessor implements OnDestroy, OnInit {

  @Input() label: string;

  @Input() set blocks(value: string) {
    this.tiles = value.split('')
      .shuffle()
      .map((glyph, index) => new PuzzleTile(glyph, [index, 0]));

    this.tilesMap = new Map<string, PuzzleTile>(
      this.tiles.map(t => [t.location.join(), t]),
    );

    this.userInputChange(this.tilesStringValue);
  };

  tiles: PuzzleTile[];
  focusTile$ = new BehaviorSubject<PuzzleTile>(null);

  private tilesMap: Map<string, PuzzleTile>;
  private unsubscribe$ = new Subject();

  private get tilesStringValue(): string {
    return this.tiles
      .filter(t => t.location[1] === 0)
      .sort((a, b) => a.location[0] - b.location[0])
      .map(t => t.label)
      .join('');
  }

  constructor() {
    super();
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.focusTile$.next(null);
  }

  userInputChange(value: string) {
    this.writeValue(value);
    this.onChange && this.onChange(value);
  }

  moveTile(direction: number[]) {
    const tile = this.focusTile$.value;
    if (!tile || this.disabled) {
      return;
    }

    const newLocation = tile.location.map((dim, index) => dim + direction[index]);

    const destinationIsOpen = !this.tilesMap.has(newLocation.join())
      && newLocation[0] > -1 && newLocation[0] < this.tiles.length
      && newLocation[1] > -1 && newLocation[1] <= 1;
    if (!destinationIsOpen) {
      tile.invalidMovementAttempt = true;
      timer(1000)
        .pipe(
          finalize(() => tile.invalidMovementAttempt = false),
          takeUntil(this.unsubscribe$))
        .subscribe();

      return;
    }

    this.tilesMap.delete(tile.location.join());
    this.tilesMap.set(newLocation.join(), tile);
    tile.location = newLocation;

    this.userInputChange(this.tilesStringValue);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.focusTile$.complete();
  }

  ngOnInit() {
    if (this.tiles) {
      this.userInputChange(this.tilesStringValue);
    }
  }
}
