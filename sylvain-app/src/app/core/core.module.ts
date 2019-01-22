import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhraseModule } from '../phrase/phrase.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, PhraseModule],
  exports: [MainComponent]
})
export class CoreModule {}
