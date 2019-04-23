import { Injectable } from '@angular/core'

import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(endpoint: string, reqOpts?: any) {
    console.log('env', environment.apiRoot)
    return this.http.get(environment.apiRoot + endpoint, reqOpts)
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(environment.apiRoot + endpoint, body, reqOpts)
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(environment.apiRoot + endpoint, body, reqOpts)
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(environment.apiRoot + endpoint, reqOpts)
  }
}
