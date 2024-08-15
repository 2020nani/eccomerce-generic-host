import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchTerm: string = '';
  selectedCategory: string = 'all';
  categories: string[] = ['Category 1', 'Category 2', 'Category 3'];

  constructor() {}

  onSearch() {
    console.log('Search term:', this.searchTerm);
    console.log('Selected category:', this.selectedCategory);
    // Adicione a lógica de busca aqui, como chamar um serviço para buscar produtos
  }
}
