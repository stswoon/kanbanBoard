import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpOptions} from "./http-options.model";
import {catchError, map} from "rxjs/operators";
import {environment} from "../../../../../environments/environment";
import {MessageService} from "primeng/api";
import {strings} from "../../utils/strings";

export type Method = "get" | "post" | "put" | "delete";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  send<T>(method: Method, url: string, body?: any, options?: HttpOptions): Observable<T> {
    url = environment.server + url;
    options = options || {};
    options.headers = options.headers || {};
    if (body) {
      options.body = body;
    }
    options.observe = "response";

    return this.http.request<T>(method, url, <any>options).pipe(
      map((response: HttpResponse<T>) => {
        return response.body;
      }),
      catchError((reason: any) => {
        console.error(`Failed to load data from url = ${url}, response:`, reason);
        this.messageService.add({severity: 'error', detail: strings.systemErrorContactAdmin});
        throw reason;
      })
    );
  }
}
