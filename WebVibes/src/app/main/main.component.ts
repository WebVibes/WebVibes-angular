import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    private matIconRegistry:MatIconRegistry,
    private domSanitzer:DomSanitizer,
    private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef, 

  ) { 
    this.mobileQuery = media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.matIconRegistry.addSvgIcon(
      'logo-arculattervezes-ikon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('../assets/ikonok/logo-arculattervezes-ikon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'webdesign-ikon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('../assets/ikonok/webdesign-ikon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'webfejlesztes-ikon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('../assets/ikonok/webfejlesztes-ikon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'webshop-ikon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('../assets/ikonok/webshop-ikon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'igenyfelmeres-ikon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('../assets/ikonok/igenyfelmeres-ikon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'tervek-elkeszitese-ikon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('../assets/ikonok/tervek-elkeszitese-ikon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'megvalositas-ikon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('../assets/ikonok/megvalositas-ikon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'celunk-sarga-ikon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('../assets/ikonok/celunk-sarga-ikon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'celunk-lila-ikon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('../assets/ikonok/celunk-lila-ikon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'celunk-zold-ikon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('../assets/ikonok/celunk-zold-ikon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'celunk-kek-ikon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('../assets/ikonok/celunk-kek-ikon.svg')
    );
  }

  ngOnInit(): void {

    
  }
  
}
