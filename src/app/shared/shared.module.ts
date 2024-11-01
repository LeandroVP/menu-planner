import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [],
  imports: [CommonModule, TranslateModule, IonicModule, FormsModule],
  exports: [CommonModule, TranslateModule, IonicModule, FormsModule],
})
export class SharedModule {}
