import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent {

  constructor(private dataStorageService : DataStorageService)
  {

  }



  onSaveData()
  {
    this.dataStorageService.storeRecipes();
  }

  onFetchData()
  {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
