import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap, catchError, finalize } from 'rxjs/operators';import { of } from 'rxjs';
import { IMainState } from './main-state.interface';
import { AddImage, ClearImage, GetIdentificationResults, ClearResults } from './main.actions';
import { MainService } from '../services/main.service';
import { IdentificationResult } from '../models/identification-result';

@State<IMainState>({
  name: 'main',
  defaults: {
    identificationResult: null,
    selectedImage: null,
    isLoading: false
  }
})
@Injectable()
export class MainState {
  constructor(private readonly mainService: MainService) {}

  @Selector()
  static identificationResult(state: IMainState): IdentificationResult | null {
    return state.identificationResult;
  }

  @Selector()
  static isLoading(state: IMainState): boolean {
    return state.isLoading;
  }

  @Selector()
  static selectedImage(state: IMainState): File | null {
    return state.selectedImage;
  }

  @Action(AddImage)
  addImage(ctx: StateContext<IMainState>, action: AddImage) {
    ctx.patchState({ selectedImage: action.image });
  }

  @Action(ClearImage)
  clearImage(ctx: StateContext<IMainState>) {
    ctx.patchState({ selectedImage: null });
  }

  @Action(ClearResults)
  clearResults(ctx: StateContext<IMainState>) {
    ctx.patchState({ identificationResult: null });
  }

  @Action(GetIdentificationResults)
  getIdentificationResults(ctx: StateContext<IMainState>, action: GetIdentificationResults) {
    ctx.patchState({ isLoading: true });
    
    if (!action.image) {
      ctx.patchState({ isLoading: false });
      return of(null);
    }

    return this.mainService.identify(action.image).pipe(
      tap(result => ctx.patchState({ identificationResult: result })),
      catchError(() => {
        ctx.patchState({ identificationResult: null });
        return of(null);
      }),
      finalize(() => ctx.patchState({ isLoading: false }))
    );
  }
}
