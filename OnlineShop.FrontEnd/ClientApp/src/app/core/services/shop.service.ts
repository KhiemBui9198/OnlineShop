import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ShopModel } from "src/app/shared/models/shop-model";
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError} from "rxjs";
import { environment } from "src/environments/environment";

@Injectable(
    {
        providedIn: 'root',
    }
)
export class ShopService {
    private readonly baseUrl = environment.baseApiUrl+'/ShopInfor';
    constructor(private httpClient: HttpClient) {}


    getAllShop(): Observable<ShopModel[]> {
        const url = `${this.baseUrl}/GetAllShop`;
        return this.httpClient
            .get(url)
            .pipe(
                map((body: any) => {
                    return body.map((body: any) => new ShopModel(body));
                }),
                catchError(error => throwError('An error occured when processing Shop', error)))
    }
    getShopById(id: number): Observable<ShopModel> {
        const url = `${this.baseUrl}/GetShopById/${id}`;
        return this.httpClient
            .get(url)
            .pipe(
                map((body: any) => new ShopModel(body)),
                catchError((error) => throwError('An error occured when processing Shop', error)));
    }
    createShop(itemModal: ShopModel): Observable<ShopModel> {
        const url = `${this.baseUrl}/AddShop`;
        return this.httpClient.post<ShopModel>(url,itemModal);
    }
    updateShop(itemId: number, product: ShopModel) {
        const url = `${this.baseUrl}/UpdateShop/${itemId}`;
        return this.httpClient.put(url, product);
    }
    deleteShop(itemId: number) {
        const url = `${this.baseUrl}/${itemId}`;
        return this.httpClient.delete(url); 
    }
}

