import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AdminUserModel } from "src/app/shared/models/admin-user-model";
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError} from "rxjs";
import { environment } from "src/environments/environment";

@Injectable(
    {
        providedIn: 'root',
    }
)
export class AdminUserService {
    private readonly baseUrl = environment.baseApiUrl+'/Identity';
    constructor(private httpClient: HttpClient) {}


    getAllUser(): Observable<AdminUserModel[]> {
        const url = `${this.baseUrl}/GetAllUser`;
        return this.httpClient
            .get(url)
            .pipe(
                map((body: any) => {
                    return body.map((body: any) => new AdminUserModel(body));
                }),
                catchError(error => throwError('An error occured when processing Shop', error)))
    }

    getUserId(userId: string): Observable<AdminUserModel>{
        const url = `${this.baseUrl}/GetUserById/${userId}`;
        return this.httpClient
            .get(url)
            .pipe(
                map((body: any) => new AdminUserModel(body)),
                catchError(error => throwError('An error occured when processing Admin user', error)))

    }
    updateUser(userId: string, user: AdminUserModel) {
        const url = `${this.baseUrl}/UpdateUser/${userId}`;
        return this.httpClient.put(url,user)
    }
    UserSignUp(user: AdminUserModel){
        const url = `${this.baseUrl}/SignUp`;
        return this.httpClient.post(url, user)
    }
}

