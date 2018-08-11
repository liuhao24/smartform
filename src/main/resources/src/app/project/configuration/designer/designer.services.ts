import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { ResponseData } from '../../../../shared/entity/response-data';
import { map, tap } from 'rxjs/operators';
import { FormInfo } from '../../entity/form-info';

@Injectable()
export class TaskDesignerService {


    public fields$ = new BehaviorSubject<any[]>([]);

    constructor(
        private http: HttpClient
    ) {
    }

    getAllFields(): Observable<any[]> {
        return this.http.get<any[]>('/assets/api/project/fields.json').pipe(
            tap((response: ResponseData) => {
                this.fields$.next(response.data.fields);
            })
        );
    }
    saveForm(form:FormInfo): Observable<any[]> {
        return this.http.post<any[]>('/smartform/page',form).pipe(
            tap((response: ResponseData) => {
                console.log(response);
            })
        );
    }

}
