import { NgModule, isDevMode } from '@angular/core';
import { TranslocoModule, TRANSLOCO_CONFIG, translocoConfig, TRANSLOCO_LOADER } from '@ngneat/transloco';
import { TranslocoHttpLoader } from './transloco-loader';

@NgModule({
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['pt'],
        defaultLang: 'pt',
        prodMode: !isDevMode(),
      })
    },
    {
      provide: TRANSLOCO_LOADER,
      useClass: TranslocoHttpLoader
    }
  ]
})
export class TranslocoRootModule {}

