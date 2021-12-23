import { Component, OnInit } from '@angular/core';
import { Crypto } from './interfaces/crypto.interface';
import { CryptoService } from './services/crypto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private listCrypto: Crypto[] = [];
  searchWord: string = '';
  filteredList: Crypto[] = [];

  constructor(private _crypto: CryptoService) {}

  ngOnInit(): void {
    this.getListCrypto();
  }

  getListCrypto() {
    this._crypto.getCurrencyCrypto().subscribe({
      next: (list) => {
        this.listCrypto = list;
        this.filteredList = list;
        console.log(this.listCrypto);
      },
      error: (err) => console.log(err),
    });
  }

  filterList(word:string) {
    if (this.searchWord.length > 2) {
      this.filteredList = this.listCrypto.filter((crypto: Crypto) => {
        if (crypto.name.toLowerCase().includes(this.searchWord.toLowerCase())) {
          return true
        }
        if (crypto.symbol.toLowerCase().includes(this.searchWord.toLowerCase())) {
          return true
        }
        return false;
      });
    } else {
      this.filteredList = this.listCrypto;
    }
  }
}
