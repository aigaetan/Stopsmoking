import { EventData, Page } from '@nativescript/core';
import { HomeViewModel } from './view-models/home-view-model';

let viewModel: HomeViewModel;

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  viewModel = new HomeViewModel();
  page.bindingContext = viewModel;
}

export function onChallengeComplete(args: EventData) {
  const button = args.object;
  const challenge = button.bindingContext;
  viewModel.completeChallenge(challenge.id);
}