
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { ResponseData } from '../../../shared/entity/response-data';
import { FormInfo } from '../../project/entity/form-info';

@Injectable()
export class FormService {

    public forms$ = new Observable<FormInfo[]>();

    public forms = [];

    constructor(private http: HttpClient) {

    }

    getForms() {
        return this.http.get<FormInfo>('/smartform/page/list').pipe(
            tap((response: any) => {
                this.forms = response;
            })
        );
    }

    saveForm(form: FormInfo) {
        return this.http.post<any[]>('/smartform/page', form).pipe(
            tap((response: ResponseData) => {
                this.forms = [...this.forms, response];
            })
        );
    }

    getForm(formId: string) {
        return this.http.get<FormInfo>('/smartform/page/' + formId).pipe(
            tap((response: ResponseData) => {
                return response;
            })
        );
    }

    updateForm(form: FormInfo) {
        return this.http.put<FormInfo>('/smartform/page/' + form.id, form).pipe(
            tap((response: ResponseData) => {
                debugger
                const _form = this.forms.find(n => n.id === form.id);
                Object.assign(_form, response);
            })
        );
    }

    deleteForm(formId: string) {
        return this.http.delete<FormInfo>('/smartform/page/' + formId).pipe(
            tap((response: ResponseData) => {
                this.forms = this.forms.filter(n => n.id !== formId);
            })
        );
    }
}
