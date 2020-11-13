import {Observable} from 'rxjs';

export interface Wisata {
    kategori: string;
    kota: string;
    id: string;
    gambar: string;
    gambarUrl: Observable<string>;
    harga: number;
    nama: string;
}
