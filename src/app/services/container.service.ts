import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

import {
  IContainerInfo,
  IContainerInfoResponse
} from "src/app/services/interfaces";
import { letterCode } from "src/app/services/letter-codes";

const url = "http://www.mocky.io/v2/5ddbad8a3400005200eadd4a";
const errMsg = {
  verificationID: {
    title: "Invalid container marking number",
    subtitle: "Marking number failed verification",
    message: `Please check the marking number in search field. The container with
      the entered number does not exist.`
  },
  requestHTTP: {
    title: "HTTP",
    subtitle: "Request error",
    message: `Nothing`
  }
};

@Injectable({
  providedIn: "root"
})
export class ContainerService {
  public getContainerInfo(id: string): Observable<IContainerInfoResponse> {
    if (!this.verificationID(id)) {
      return new Observable(() => {
        throw errMsg.verificationID;
      });
    } else {
      const requestURL = `${url}?numer=${id}`;
      return this.http.get<IContainerInfo>(requestURL).pipe(
        catchError(() => throwError(errMsg.requestHTTP)),
        map(containerInfo => ({ containerInfo, requestLink: requestURL }))
      );
    }
  }

  public verificationID(id: string): boolean {
    const idArr = id.split("");
    const controlNum = parseInt(idArr[idArr.length - 1], 10);
    let nCode: Array<number> = idArr.slice(0, 4).map(s => letterCode[s]);
    nCode.push(...idArr.slice(4, 10).map(n => parseInt(n, 10)));
    nCode = nCode.map((n, i) => n * Math.pow(2, i));
    let calcNum = nCode.reduce((acc, n) => (acc += n), 0) % 11;
    calcNum = calcNum != 10 ? calcNum : 0;
    return calcNum === controlNum;
  }

  constructor(private http: HttpClient) {}
}
