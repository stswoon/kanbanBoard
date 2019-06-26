import {HttpObserve} from "@angular/common/http/src/client";
import {HttpHeaders} from "@angular/common/http/src/headers";

export interface HttpOptions {
    body?: any;
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    responseType?: "json" | "text" | "blob" | "arraybuffer";
    observe?: HttpObserve;
}
