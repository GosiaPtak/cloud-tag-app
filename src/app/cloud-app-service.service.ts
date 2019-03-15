import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export interface Tags {
  level: number;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class CloudAppServiceService {
  tagListUrl = 'assets/tags.json';
  public errorMessage = '';
  constructor(private http: HttpClient) {}

  getTags() {
    return this.http.get<Tags>(this.tagListUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  handleError(error) {
    if (error.error instanceof ErrorEvent) {
      this.errorMessage = `Error: ${error.error.message}`;
    } else {
      this.errorMessage = `Error Code: ${error.status}\nMessage: ${
        error.message
      }`;
    }
    return throwError(this.errorMessage);
  }
}
