import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NonNullableFormBuilder, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {Item} from '../models/item.model';

@Component({
	selector: 'app-item-form',
	templateUrl: './item-form.component.html',
	styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
	get modalValue() {
		return this.form.controls['unit'].value;
	}

	form = this.fb.group({
		unit: this.translateService.instant('amount.unit'),
		name: ['', Validators.required],
		amount: [1, [Validators.min(0), Validators.required]]
	});

	@Output('newItem') newItemEvent = new EventEmitter<Item>();

	@Input() item: Item | undefined;

	constructor(private fb: NonNullableFormBuilder, private translateService: TranslateService) {}

	ngOnInit(): void {
		this.item && this.form.patchValue(this.item);
	}

	confirm() {
		console.log(this.form.getRawValue());
	}
}
