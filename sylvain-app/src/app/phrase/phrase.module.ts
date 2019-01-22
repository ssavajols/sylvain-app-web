import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { PhrasesComponent } from './phrases/phrases.component';
import { PhrasesService } from './phrases.service';

@NgModule({
  declarations: [ButtonComponent, PhrasesComponent],
  exports: [PhrasesComponent],
  imports: [CommonModule]
})
export class PhraseModule {}
