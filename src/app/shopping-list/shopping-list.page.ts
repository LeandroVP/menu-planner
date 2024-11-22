import {Component} from '@angular/core';
import {ItemReorderEventDetail} from '@ionic/angular';
import {Item} from '../shared/models/item.model';

interface ItemSlidingCustomEvent extends CustomEvent {
	target: HTMLIonItemSlidingElement;
}

@Component({
	selector: 'app-shopping-list',
	templateUrl: 'shopping-list.page.html',
	styleUrls: ['shopping-list.page.scss']
})
export class ShoppingLlistPage {
	items: Item[] = [{amount: 1, name: 'papafrita', unit: 'Kg'}];
	constructor() {}

	onAddItem(item: Item) {
		this.items = [...this.items, item];
		console.log(this.items);
	}

	handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
		ev.detail.complete(this.items);
	}

	removeAt(i: number) {
		this.items = [...this.items.slice(0, i), ...this.items.slice(i + 1)];
	}
}
