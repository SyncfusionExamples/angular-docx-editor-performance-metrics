import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import {
  DocumentEditorContainerModule,
  DocumentEditorContainerComponent,
  ToolbarService, RibbonService
} from '@syncfusion/ej2-angular-documenteditor';
import { CommonModule } from '@angular/common';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DocumentEditorContainerModule, DropDownListModule, ButtonModule],
  providers: [ToolbarService, RibbonService],
  templateUrl: './app.html'
})
export class App {

  @ViewChild('container')
  public container!: DocumentEditorContainerComponent;

  public loaded: boolean = false;
  constructor(
  private cdr: ChangeDetectorRef
) {}

  public hostUrl =
    'http://localhost:62870/api/documenteditor/';
  public selectedFile: string =
    'Getting Started50.docx';

  public metrics = {
    componentLoad: 0,
    documentOpen: 0,
    download: 0,
    rtfExport: 0,
    htmlExport: 0,
    pdfExport: 0
  };

  private componentStart = 0;


  public loadComponent(): void {

    if (!this.loaded) {

      this.componentStart =
        performance.now();

      this.loaded = true;

      return;
    }

    this.loadDocument();
  }

  public destroyComponent(): void {

    if (this.container) {
      this.container.destroy();
    }

    this.loaded = false;

    this.selectedFile =
      'Getting Started50.docx';

    this.metrics = {
      componentLoad: 0,
      documentOpen: 0,
      download: 0,
      rtfExport: 0,
      htmlExport: 0,
      pdfExport: 0
    };
  }

  public downloadDocument(): void {

    if (!this.container?.documentEditor) {
      return;
    }

    const start = performance.now();

    this.container.documentEditor.save(
      'Document',
      'Docx'
    );

    this.metrics.download =
      Math.round(
        performance.now() - start
      );
      this.cdr.detectChanges();
  }

  public onCreated(): void {

    if (this.container?.documentEditor) {

      this.container.documentEditor.documentName =
        'Benchmark';
    }

    this.metrics.componentLoad =
      Math.round(
        performance.now() -
        this.componentStart
      );

    this.loadDocument();
  }

  public async loadDocument(): Promise<void> {

    const start = performance.now();

    const response = await fetch(
      this.hostUrl + 'LoadBenchmarkDocument',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fileName: this.selectedFile
        })
      });

    if (response.status === 200) {
      const sfdt = await response.text();
      this.container.documentEditor.open(sfdt);
    } else {
      console.error(
        'Document load failed',
        response.status
      );
    }

    this.metrics.documentOpen =
      Math.round(
        performance.now() - start
      );
      this.cdr.detectChanges();
  }

  public async benchmarkRtf(): Promise<void> {

    const start = performance.now();

    const sfdt =
      this.container.documentEditor
        .serialize();

    const response = await fetch(
      this.hostUrl + 'BenchmarkRtf',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: sfdt
        })
      });

    if (response.status === 200) {

  const blob = await response.blob();

  this.downloadBlob(
    blob,
    'Document.rtf'
  );

  this.metrics.rtfExport =
    Math.round(
      performance.now() - start
    );
    this.cdr.detectChanges();
}
  }

  public async benchmarkHtml(): Promise<void> {

    const start = performance.now();

    const sfdt =
      this.container.documentEditor
        .serialize();

    const response = await fetch(
      this.hostUrl + 'BenchmarkHtml',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: sfdt
        })
      });

    if (response.status === 200) {

  const blob = await response.blob();

  this.downloadBlob(
    blob,
    'Document.html'
  );

  this.metrics.htmlExport =
    Math.round(
      performance.now() - start
    );
    this.cdr.detectChanges();
}
  }

  public async benchmarkPdf(): Promise<void> {

    const start = performance.now();

    const sfdt =
      this.container.documentEditor
        .serialize();

    const response = await fetch(
      this.hostUrl + 'BenchmarkPdf',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: sfdt
        })
      });

    if (response.status === 200) {

  const blob = await response.blob();

  this.downloadBlob(
    blob,
    'Document.pdf'
  );

  this.metrics.pdfExport =
    Math.round(
      performance.now() - start
    );
    this.cdr.detectChanges();
}
  }

  private downloadBlob(
    blob: Blob,
    fileName: string
  ): void {

    const url =
      window.URL.createObjectURL(blob);

    const a =
      document.createElement('a');

    a.href = url;
    a.download = fileName;

    document.body.appendChild(a);

    a.click();

    a.remove();

    window.URL.revokeObjectURL(url);
  }

}