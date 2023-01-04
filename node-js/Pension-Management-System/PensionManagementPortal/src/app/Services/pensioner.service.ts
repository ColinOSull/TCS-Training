import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:5001/pensioner/getall';
const CREATE_URL = 'http://localhost:5001/pensioner/create';
const DELETE_URL = 'http://localhost:5001/pensioner/delete';
const PROCESS_URL = 'http://localhost:5001/pensioner/getby';
@Injectable({
  providedIn: 'root',
})

export class PensionerService {

  savePensioner(pensioner: { 
    name: String;
    date_of_birth: String;
    pan: Number;
    aadhaar: Number;
    salary_earned: Number;
    allowences: Number;
    self_family_pension: String;
    bank_detail: {
        bank_name: String;
        account_number: Number;
        public_or_private: String; }
    }) 
        {return this.http.post(CREATE_URL, pensioner);}

  getPensioners() {
    
    return this.http.get(BASE_URL);
  }

  getPensionerProcess(pensioner:{
    name: String;
    date_of_birth: String;
    pan: Number;
    aadhaar: Number;
    salary_earned: Number;
    allowences: Number;
    self_family_pension: String;
    bank_detail: {
        bank_name: String;
        account_number: Number;
        public_or_private: String; }
  }
  ){
    return this.http.get(PROCESS_URL+'/'+pensioner.aadhaar)
  }


  
  deletePensioner(pensioner:{
    name: String;
    date_of_birth: String;
    pan: Number;
    aadhaar: Number;
    salary_earned: Number;
    allowences: Number;
    self_family_pension: String;
    bank_detail: {
        bank_name: String;
        account_number: Number;
        public_or_private: String; }
  }) 
  
  {
    return this.http.delete(DELETE_URL+'/'+pensioner.aadhaar);
  }
  //deleteUser(pensioner) {
   // return this.http.delete(BASE_URL+'/'+aadhaar);
  //}
  

  constructor(private http: HttpClient) {}
}
