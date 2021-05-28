import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment as env} from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getGameList(ordering: string, search?: string)Observable<APIResponse<Game>> {

    const params = new HttpParams().set('ordering', ordering);

    if(search) {
      const params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}`, {
      params: params,
    });
  }
}
