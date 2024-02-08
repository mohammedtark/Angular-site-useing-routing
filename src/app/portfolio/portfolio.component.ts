import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  showOverlay: boolean = false;
  selectedImageSrc: string = '';
  imageSources: string[] = [
    './assets/poert1.png',
    './assets/port2.png',
    './assets/port3.png',
    './assets/poert1.png',
    './assets/port2.png',
    './assets/port3.png',
    // يمكنك إضافة المزيد حسب الحاجة...
  ];

  ngOnInit(): void {
    // يمكنك هنا تحميل البيانات من الخدمة أو أي مكان آخر إذا كنت بحاجة إلى ذلك
  }

  toggleOverlay(imageSrc: string): void {
    this.showOverlay = !this.showOverlay;
    this.selectedImageSrc = imageSrc;
  }

  closeOverlay(): void {
    this.showOverlay = false;
  }
}
