import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormArray, FormControl, NonNullableFormBuilder, Validators} from '@angular/forms';
import {IonModal} from '@ionic/angular';
import {OverlayEventDetail} from '@ionic/core/components';
import {Item} from '../models/item.model';

@Component({
	selector: 'app-item-form',
	templateUrl: './item-form.component.html',
	styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
	@ViewChild(IonModal) modal!: IonModal;

	@Output() newItem = new EventEmitter<Item>();

	@Input() item: Item | undefined;
	// {
	//   id: '1',
	//   name: 'item',
	//   tags: ['Tag1', 'Tag3'],
	//   recipeId: '',
	// };

	form = this.fb.group({
		id: '',
		name: ['', Validators.required],
		tags: this.fb.array<string>([]),
		recipeId: ''
	});

	constructor(private fb: NonNullableFormBuilder) {}

	ngOnInit(): void {
		this.item && this.form.patchValue(this.item);
		this.item?.tags.forEach((tag) => this.tags.push(this.fb.control(tag)));
	}

	get tags(): FormArray<FormControl<string>> {
		return this.form.get('tags') as FormArray;
	}

	addTag(tag?: string) {
		tag && this.tags.push(this.fb.control(tag));
	}

	removeTag(index: number) {
		this.tags.removeAt(index);
	}

	cancel() {
		this.modal.dismiss(null, 'cancel');
	}

	confirm() {
		this.modal.dismiss(this.form.getRawValue(), 'confirm');
		this.form.reset();
		this.tags.clear();
	}

	onWillDismiss(event: Event) {
		const ev = event as CustomEvent<OverlayEventDetail<Item>>;
		if (ev.detail.role === 'confirm') {
			this.newItem.emit(ev.detail.data);
		}
	}
}
