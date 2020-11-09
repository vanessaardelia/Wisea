import {Observable} from 'rxjs';

export interface Wisata {
    id: string;
    gambar: string;
    gambarUrl: Observable<string | null>;
    harga: number;
    nama: string;
}
