import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ProductModel } from "src/app/shared/models/product-model";
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable(
    {
        providedIn: 'root',
    }
)
export class ProductService {
    private readonly baseUrl = environment.baseApiUrl +'/Product';
    constructor(private httpClient: HttpClient) { }

    getAllProduct(): Observable<ProductModel[]> {
        const url = `${this.baseUrl}/GetAllProduct`;
        return this.httpClient
            .get(url)
            .pipe(
                map((body: any) => {
                    return body.map((i: any) => new ProductModel(i));
                }),
                catchError((error) => throwError('An error occured when processing getProduct', error)))
    }

    getProduct(id: number): Observable<ProductModel> {
        const url = `${this.baseUrl}/GetProductById/${id}`;
        return this.httpClient
            .get(url)
            .pipe(
                map((body: any) => new ProductModel(body)),
                catchError((error) => throwError('An error occured when processing getProduct', error)));
    }
    createProduct(item: ProductModel) {
        const url = `${this.baseUrl}/AddProduct`;
        return this.httpClient.post(url, item);
    }
    updateProduct(productId: number, item: ProductModel) {
        const url = `${this.baseUrl}/UpdateProduct/${productId}`;
        return this.httpClient.put(url, item);
    }
    deleteProduct(itemId: number) {
        const url = `${this.baseUrl}/${itemId}`;
        return this.httpClient.delete(url);
    }
}

