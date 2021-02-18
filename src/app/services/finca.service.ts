import { Injectable, resolveForwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FincaService {
  constructor(private http: HttpClient) {}
  url = environment.url;
  
  getFinca() {
    return this.http.get(this.url).pipe((res) => {
      return res;
    });
  }

  getFincaId(id) {
    return this.http.get(this.url).pipe((res) => {
      return res;
    });
  }

  createFinca(data) {
    return this.http.post(this.url, data).pipe((res) => {
      return res;
    });
  }
  updateFinca(id, data) {
    return this.http.put(this.url + `/${id}`, data).pipe((res) => {
      return res;
    });
  }

  deleteFinca(id) {
    return this.http.delete(this.url + `/${id}`).pipe((res) => {
      return res;
    });
  }
}
