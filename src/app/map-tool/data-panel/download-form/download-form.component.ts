import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DialogResponse } from '../../../ui/ui-dialog/ui-dialog.types';
import { FileExportService, ExportType } from './file-export.service';

@Component({
  selector: 'app-download-form',
  templateUrl: './download-form.component.html',
  styleUrls: ['./download-form.component.scss'],
  providers: [ FileExportService ]
})
export class DownloadFormComponent implements OnInit {
  filetypes: ExportType[];
  loading = false;
  buttonClicked = new EventEmitter<DialogResponse>();

  constructor(public exportService: FileExportService, public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.filetypes = this.exportService.getFileTypes();
  }

  setFormConfig(config: Object) {
    this.exportService.setExportValues(config);
  }

  onDownloadClick(e) {
    this.loading = true;
    const filetypes = this.filetypes
      .filter(f => f.checked).map(f => f.value);
    this.exportService.sendFileRequest(filetypes)
      .subscribe(res => {
        if (!res.hasOwnProperty('path')) {
          console.log(`Error occured: ${res}`);
          this.loading = false;
        } else {
          // Download after slight delay to make sure file is ready
          setTimeout(() => {
            window.location.href = res['path'];
            this.dismiss({ accepted: true });
            this.loading = false;
          }, 500);
        }
      });
  }

  onCancelClick(e) {
    this.dismiss({ accepted: false });
  }

  private dismiss(data) {
    this.buttonClicked.emit(data);
    this.bsModalRef.hide();
  }

}
