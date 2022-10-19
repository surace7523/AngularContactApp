import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IContact } from '../models/IContact';
import { IGroup } from '../models/IGroup';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private static serverUrl: string = 'http://localhost:9000';  //json server url

  constructor(private httpClient: HttpClient) { }


  //GET ALL CONTACTS
  public getAllContacts(): Observable<IContact[]>{

    let dataUrl: string ='http://localhost:9000/contacts/';
    return this.httpClient.get<IContact[]>(dataUrl).pipe(catchError(this.handleError));

  }


  //GET SINGLE CONTACTS


public getContact(contactId: string): Observable<IContact>{

  let dataUrl: string ='http://localhost:9000/contacts/:contactID';
  return this.httpClient.get<IContact>(dataUrl).pipe(catchError(this.handleError));

}


//CREATE CONTACT

public createContact(contact: IContact): Observable<IContact>{

  let dataUrl: string ='http://localhost:9000/contacts';
  return this.httpClient.post<IContact>(dataUrl, contact).pipe(catchError(this.handleError));


}

//UPDATE CONTACT

public updateContact(contact: IContact, contactId: string): Observable<IContact>{

  let dataUrl: string ='http://localhost:9000/contacts/:contactID';
  return this.httpClient.put<IContact>(dataUrl, contact).pipe(catchError(this.handleError));


}


//DELETE CONTACT

public deleteContact(contact: IContact): Observable<{}>{

  let dataUrl: string ='http://localhost:9000/groups';
  return this.httpClient.delete<{}>(dataUrl).pipe(catchError(this.handleError));


}

//GET ALL GROUPS
public getAllGroups(): Observable<IGroup[]>{

  let dataUrl: string ='http://localhost:9000/contacts/';
  return this.httpClient.get<IGroup[]>(dataUrl).pipe(catchError(this.handleError));

}




  public handleError(error:HttpErrorResponse){

let errorMessage:string ='';

if(error.error instanceof ErrorEvent){

  //client error

  errorMessage = 'Error :${error.error.message}'
}
else{
  //server error
  errorMessage = 'Status :${error.status} \n Message: ${error.message}';
}

return throwError(errorMessage);
  }
}
