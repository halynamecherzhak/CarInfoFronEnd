import { Observable } from "rxjs/Observable";
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Injectable } from "@angular/core";

@Injectable()
export class BrandService {

  private urlForGetTopFourBrands: string = 'http://127.0.0.1:5000/GetTopFourBrands';
  private urlForGetBrand: string = 'http://127.0.0.1:5000/GetBrandById';
  private urlForGetBrands: string = 'http://127.0.0.1:5000/GetBrands';

  constructor(private _http: Http) { }

  public getTopFourBrands(): any
  {    
    return this._http.get(this.urlForGetTopFourBrands)
    .map((res: Response) => 
    {
      return res.json();
    })
    .catch((error: any) => Observable.throw(error));
  }

  public getBrands(): any
  {  
    return this._http.get(this.urlForGetBrands)
    .map((res: Response) => 
    {
      return res.json();
    })
    .catch((error: any) => Observable.throw(error));
  }

  public getBrand(brandId: number): any
  {
    let searchLine = "brandId=" + brandId.toString();

    return this._http.get(this.urlForGetBrand, {params: searchLine})
    .map((res: Response) => 
    {
      return res.json();
    })
    .catch((error: any) => Observable.throw(error));
  }
}
