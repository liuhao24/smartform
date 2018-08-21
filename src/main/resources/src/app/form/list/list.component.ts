import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { FormDesignerComponent } from '../designer/form-designer.component';
import { FormService } from '../services/form.service';
import { FormInfo } from '../../project/entity/form-info';
import { FormDetailComponent } from '../detail/form-detail.component';
// import { FormService } from '../services/form.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './list.component.html'
})
export class FormListComponent implements OnInit {

  dataSet = [];

  entity: FormInfo;

  isEdit = false;

  formDesignerComponent: any;

  formDesignerDetailComponent: any;

  constructor(
    public formService: FormService,
    private modalService: NzModalService
  ) {

  }

  getFormList() {
    this.formService.getForms().subscribe();
  }

  ngOnInit() {
    this.getFormList();
  }



  showDesigner() {
    // this.isVisible = true;
    this.formDesignerComponent = this.modalService.create({
      nzTitle: null,
      nzWrapClassName: 'modal-full modal-full-only-body',
      nzWidth: '100%',
      nzContent: FormDesignerComponent,
      nzFooter: null,
      nzClosable: false,
      nzComponentParams: {
        entity: this.entity,
        saveAction: (data) => {
          if (this.entity) {
            this.formService.updateForm(data).subscribe(() => {
              this.entity = null;
              this.formDesignerComponent.destroy();
            });
          } else {
            this.formService.saveForm(data).subscribe(() => {
              this.formDesignerComponent.destroy();
            });
          }
          // this.formDesignerComponent.destroy();
        },
        cancelAction: () => {
          this.formDesignerComponent.destroy();
        }
      }
    });
  }
  editForm(form) {
    // this.formService.getForm(form.id).subscribe((response) => {
    //   this.entity = response;
    //   this.showDesigner();
    // }, () => {
    // })
    this.entity = form;
      this.showDesigner();
  }
  openForm(form) {
    this.formDesignerDetailComponent = this.modalService.create({
      nzTitle: null,
      nzWrapClassName: 'modal-detail',
      nzWidth: '980px',
      nzContent: FormDetailComponent,
      nzFooter: null,
      nzClosable: false,
      nzOkType: 'primary',
      nzComponentParams: {
        entity: this.entity,
        saveAction: (data) => {
          this.formDesignerDetailComponent.destroy();
        },
        cancelAction: () => {
          this.formDesignerDetailComponent.destroy();
        }
      }
    });
  }
  deleteForm(form) {
    this.formService.deleteForm(form.id).subscribe();
  }
  showDeleteConfirm(form): void {
    this.modalService.confirm({
      nzTitle: '确定要删除该表单吗？',
      nzContent: '<b style="color: red;">表单： ' + form.name + '</b>',
      nzOkText: '删除',
      nzOkType: 'danger',
      nzOnOk: () => {
        this.deleteForm(form);
      },
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }
}
