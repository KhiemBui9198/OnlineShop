import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CategoryModel } from "src/app/shared/models/category-model";
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject, pipe } from "rxjs";
import { environment } from "src/environments/environment";



@Injectable(
    {
        providedIn: 'root',
    }
)
export class CategoryService {
    private readonly baseUrl = environment.baseApiUrl + '/Category';
    constructor(private httpClient: HttpClient) { }

    getAllCategory(): Observable<CategoryModel[]> {
        const url = `${this.baseUrl}/GetAllCategory`;
        return this.httpClient
            .get(url)
            .pipe(
                map((body: any) => {
                    return body.map((body: any) => new CategoryModel(body));
                }),
                catchError(error => throwError('An error occured when processing getCategory', error)))
    }
    getCategory(id: number): Observable<CategoryModel> {
        const url = `${this.baseUrl}/GetCategoryById/${id}`;
        return this.httpClient
            .get(url)
            .pipe(
                map((body: any) => new CategoryModel(body)),
                catchError((error) => throwError('An error occured when processing getCategory', error)));
    }
    createCategory(item: CategoryModel){
        const url = `${this.baseUrl}/AddCategory`;
        return this.httpClient.post(url, item)
    }
    updateCategory(categoryId: number, product: CategoryModel) {
        const url = `${this.baseUrl}/UpdateCategory/${categoryId}`;
        return this.httpClient.put(url, product)
    }
    deleteCategory(categoryId: number) {
        const url = `${this.baseUrl}/${categoryId}`;
        return this.httpClient.delete(url); 
    }
}
