import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

export interface MainStateModel {}

@State<MainStateModel>({
  name: 'main',
  defaults: {}
})
@Injectable()
export class MainState {}
