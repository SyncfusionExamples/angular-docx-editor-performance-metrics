# Syncfusion® Angular DOCX Editor – Performance Benchmark Sample

## Introduction

This sample demonstrates performance benchmarking scenarios using the Syncfusion® Angular DOCX Editor. It allows users to benchmark document loading, document download, and export operations using predefined benchmark documents.

## Project Features

- Load predefined benchmark documents (50, 100, 200, and 500 pages).
- Measure component initialization performance.
- Measure document opening performance.
- Measure DOCX download performance.
- Measure RTF, HTML, and PDF export performance.
- View benchmark metrics directly within the application.

## How to Run the Sample

This sample consists of an Angular client application and an ASP.NET Core backend service. Both applications must be running.

### 1. Start the ASP.NET Core backend

Navigate to the server project directory and run:

```bash
dotnet run
```

### 2. Configure the service URL

Update the Document Editor service URL in:

```text
src/app/app.ts
```

Example:

```text
http://localhost:<your-port>/api/documenteditor/
```

### 3. Install client dependencies

Navigate to the Angular project directory and run:

```bash
npm install
```

### 4. Start the Angular client

```bash
ng serve
```

### 5. Open the application

Open the URL displayed in the terminal after the application starts.

## APIs Used

| API / Endpoint | HTTP Method | Purpose |
|---|---|---|
| `/api/documenteditor/LoadBenchmarkDocument` | POST | Loads benchmark documents and returns SFDT content. |
| `/api/documenteditor/BenchmarkRtf` | POST | Measures and performs RTF export operations. |
| `/api/documenteditor/BenchmarkHtml` | POST | Measures and performs HTML export operations. |
| `/api/documenteditor/BenchmarkPdf` | POST | Measures and performs PDF export operations. |

## Resources

- **Product page:** [Syncfusion Angular DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor)
- **Documentation:** [Syncfusion Angular DOCX Editor - Documentation](https://help.syncfusion.com/document-processing/word/word-processor/angular/overview)
- **Online demo:** [Syncfusion Angular DOCX Editor - Online demo](https://document.syncfusion.com/demos/docx-editor/angular/#/tailwind3/document-editor/default)

## Support and feedback

For any other queries, reach our [Syncfusion support team](https://support.syncfusion.com/?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples) or post the queries through the [community forums](https://www.syncfusion.com/forums?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples). 

Request new feature through [Syncfusion feedback portal](https://www.syncfusion.com/feedback?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples). 

## License

This is a commercial product and requires a paid license for possession or use. Syncfusion's licensed software, including this component, is subject to the terms and conditions of [Syncfusion's EULA](https://www.syncfusion.com/license/studio/35.1.37/syncfusion_essential_studio_eula.pdf?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples). You can purchase a license [here](https://www.syncfusion.com/sales/products?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples) or start a free 30-day trial [here](https://www.syncfusion.com/account/manage-trials/start-trials?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples).