import {Observable} from 'rxjs';

export interface Wisata {
    kategori: string;
    kota: string;
    id: string;
    gambar: string;
    gambarUrl: Observable<string | null>;
    harga: number;
    nama: string;
}
