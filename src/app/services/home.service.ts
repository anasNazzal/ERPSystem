import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class HomeService {

    constructor(private httpClient: HttpClient) { }

    getPageTypes(): Observable<any> {
        return this.httpClient.get('../../assets/categories.json');
    }

    getAllModule(): Observable<any> {
        const url = `/api/Modules/GetAllModules`;
        return this.httpClient.get(url);
    }

    //return list of pages for this module view pages by pageType 
    getPageByModuleId(moduleId: number): Observable<any> {
<<<<<<< HEAD
        const url = `/api/Pages/GetAllPagesByModul/${moduleId}`;
        console.log(url);
=======
        const url = `/api/Pages/GetAllPagesByModule/${moduleId}`;
>>>>>>> f9bfba3100ecc019d4ea833c6ec32347ef2ec6a4
        return this.httpClient.get(url);
    }
}