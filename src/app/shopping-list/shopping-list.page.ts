import {Component} from '@angular/core';
import {Item} from '../shared/models/item.model';

@Component({
	selector: 'app-shopping-list',
	templateUrl: 'shopping-list.page.html',
	styleUrls: ['shopping-list.page.scss']
})
export class ShoppingLlistPage {
	constructor() {}

	onAddItem(item: Item) {
		console.log(item);
	}
}
