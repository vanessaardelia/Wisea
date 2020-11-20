import {Observable} from 'rxjs';

export interface Wisata {
    kategori: string;
    kota: string;
    id: string;
    gambar: string;
    gambarUrl: Observable<string>;
    harga: number;
    lokasi: string;
    nama: string;
    tanggal: string;
    tiketTerjual: string;
    distance: number;
    position: Array<number>;
}
