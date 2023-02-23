import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MatufacturerModel } from "src/app/shared/models/manufacturer-model";
import { environment } from "src/environments/environment";
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";


@Injectable(
    {
        providedIn: 'root',
    }
)
export class ManufacturerService {
    private readonly baseUrl = environment.baseApiUrl + '/Manufacturer';
    constructor(private httpClient: HttpClient) { }

    getAllManufacturer(): Observable<MatufacturerModel[]> {
        const url = `${this.baseUrl}/GetAllManufacturer`;
        return this.httpClient
            .get<MatufacturerModel[]>(url)
            .pipe(
                map((body: any) => {
                    return body.map((body: any) => new MatufacturerModel(body));
                }),
                catchError(error => throwError('An error occured when processing getCategory', error)))
    }
    getManufacturer(id: number): Observable<MatufacturerModel> {
        const url = `${this.baseUrl}/GetManufacturerId/${id}`;
        return this.httpClient
            .get(url)
            .pipe(
                map((body: any) => new MatufacturerModel(body)),
                catchError((error) => throwError('An error occured when processing getCategory', error)));
    }
    createManufacturer(item: MatufacturerModel){
        const url = `${this.baseUrl}/AddManufacturer`;
        return this.httpClient.post(url, item)
    }
    updateManufacturer(itemId: number, item: MatufacturerModel) {
        const url = `${this.baseUrl}/UpdateManufacturer/${itemId}`;
        return this.httpClient.put(url, item)
    }
    deleteManufacturer(itemId: number) {
        const url = `${this.baseUrl}/${itemId}`;
        return this.httpClient.delete(url); 
    }
}

