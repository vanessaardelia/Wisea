// import { Injectable } from '@angular/core';
// import {AngularFirestore} from '@angular/fire/firestore';
// import {WisataDetail} from '../model/wisata-detail.interface';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class DatabaseService {
//   private wisataList: WisataDetail[] = [
//     {
//       id: '',
//       deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
//       gambar: ['contoh-1.png', 'contoh-2.png'],
//       harga: 100000,
//       jam: 'Lorem Ipsum',
//       kategori: 'pertunjukan',
//       kota: 'Lorem Ipsum',
//       lokasi: 'Lorem Ipsum',
//       nama: 'Lorem Ipsum',
//       tanggal: 'Lorem Ipsum',
//       tiketTerjual: 50,
//       tiketTersedia: 100,
//     },
//     {
//       id: '',
//       deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
//       gambar: ['contoh-1.png', 'contoh-2.png'],
//       harga: 100000,
//       jam: 'Lorem Ipsum',
//       kategori: 'pertunjukan',
//       kota: 'Lorem Ipsum',
//       lokasi: 'Lorem Ipsum',
//       nama: 'Lorem Ipsum',
//       tanggal: 'Lorem Ipsum',
//       tiketTerjual: 50,
//       tiketTersedia: 100,
//     },
//     {
//       id: '',
//       deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
//       gambar: ['contoh-1.png', 'contoh-2.png'],
//       harga: 100000,
//       jam: 'Lorem Ipsum',
//       kategori: 'pertunjukan',
//       kota: 'Lorem Ipsum',
//       lokasi: 'Lorem Ipsum',
//       nama: 'Lorem Ipsum',
//       tanggal: 'Lorem Ipsum',
//       tiketTerjual: 50,
//       tiketTersedia: 100,
//     },
//     {
//       id: '',
//       deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
//       gambar: ['contoh-1.png', 'contoh-2.png'],
//       harga: 100000,
//       jam: 'Lorem Ipsum',
//       kategori: 'pertunjukan',
//       kota: 'Lorem Ipsum',
//       lokasi: 'Lorem Ipsum',
//       nama: 'Lorem Ipsum',
//       tanggal: 'Lorem Ipsum',
//       tiketTerjual: 50,
//       tiketTersedia: 100,
//     },
//     {
//       id: '',
//       deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
//       gambar: ['contoh-1.png', 'contoh-2.png'],
//       harga: 100000,
//       jam: 'Lorem Ipsum',
//       kategori: 'pertunjukan',
//       kota: 'Lorem Ipsum',
//       lokasi: 'Lorem Ipsum',
//       nama: 'Lorem Ipsum',
//       tanggal: 'Lorem Ipsum',
//       tiketTerjual: 50,
//       tiketTersedia: 100,
//     },
//     {
//       id: '',
//       deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
//       gambar: ['contoh-1.png', 'contoh-2.png'],
//       harga: 100000,
//       jam: 'Lorem Ipsum',
//       kategori: 'pertunjukan',
//       kota: 'Lorem Ipsum',
//       lokasi: 'Lorem Ipsum',
//       nama: 'Lorem Ipsum',
//       tanggal: 'Lorem Ipsum',
//       tiketTerjual: 50,
//       tiketTersedia: 100,
//     },
//     {
//       id: '',
//       deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
//       gambar: ['contoh-1.png', 'contoh-2.png'],
//       harga: 100000,
//       jam: 'Lorem Ipsum',
//       kategori: 'pertunjukan',
//       kota: 'Lorem Ipsum',
//       lokasi: 'Lorem Ipsum',
//       nama: 'Lorem Ipsum',
//       tanggal: 'Lorem Ipsum',
//       tiketTerjual: 50,
//       tiketTersedia: 100,
//     },
//     {
//       id: '',
//       deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
//       gambar: ['contoh-1.png', 'contoh-2.png'],
//       harga: 100000,
//       jam: 'Lorem Ipsum',
//       kategori: 'pertunjukan',
//       kota: 'Lorem Ipsum',
//       lokasi: 'Lorem Ipsum',
//       nama: 'Lorem Ipsum',
//       tanggal: 'Lorem Ipsum',
//       tiketTerjual: 50,
//       tiketTersedia: 100,
//     },
//     {
//       id: '',
//       deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
//       gambar: ['contoh-1.png', 'contoh-2.png'],
//       harga: 100000,
//       jam: 'Lorem Ipsum',
//       kategori: 'pertunjukan',
//       kota: 'Lorem Ipsum',
//       lokasi: 'Lorem Ipsum',
//       nama: 'Lorem Ipsum',
//       tanggal: 'Lorem Ipsum',
//       tiketTerjual: 50,
//       tiketTersedia: 100,
//     },
//     {
//       id: '',
//       deskripsi: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
//       gambar: ['contoh-1.png', 'contoh-2.png'],
//       harga: 100000,
//       jam: 'Lorem Ipsum',
//       kategori: 'pertunjukan',
//       kota: 'Lorem Ipsum',
//       lokasi: 'Lorem Ipsum',
//       nama: 'Lorem Ipsum',
//       tanggal: 'Lorem Ipsum',
//       tiketTerjual: 50,
//       tiketTersedia: 100,
//     },
//   ];
//
//   constructor(
//       private firestore: AngularFirestore
//   ) { }
//
//   createWisataList(): Promise<void> {
//     this.wisataList.forEach(wisata => {
//       wisata.id = this.firestore.createId();
//       this.firestore.collection('wisata').doc(wisata.id).set(wisata);
//     });
//
//     return;
//   }
// }
