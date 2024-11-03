import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ItemFormComponent } from './item-form/item-form.component';

@NgModule({
  declarations: [ItemFormComponent],
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    ItemFormComponent,
  ],
})
export class SharedModule {}
