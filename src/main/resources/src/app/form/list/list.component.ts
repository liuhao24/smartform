import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { FormDesignerComponent } from '../designer/form-designer.component';
import { FormService } from '../services/form.service';
import { FormInfo } from '../../project/entity/form-info';
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
      nzTitle: '表单设计器',
      nzWrapClassName: 'modal-full',
      nzWidth: '100%',
      nzContent: FormDesignerComponent,
      nzOkText: '确定',
      nzOkType: 'primary',
      nzComponentParams: {
        entity: this.entity
      },
      nzOnOk: () => {
        const _form = this.formDesignerComponent.getContentComponent().saveForm();
        if (this.entity) {
          this.formService.updateForm(_form).subscribe(() => {
            this.entity = null;
          });
        } else {
          this.formService.saveForm(_form).subscribe(() => {
          });
        }
      },
      nzCancelText: '取消',
      nzOnCancel: () => {
        this.formDesignerComponent.destroy();
      }
    });
  }
  // handleCancel() {
  // }
  // handleOk() {
  //   const _form = this.designer.saveForm();
  //   this.formService.saveForm(_form).subscribe(() => {
  //   });
  //   this.handleCancel();
  // }
  editForm(form) {
    this.formService.getForm(form.id).subscribe((response) => {
      this.entity = response;
      this.showDesigner();
    }, () => {
    })
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
