import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";

interface members {
  first_name: String;
  last_name: String;
  email: String;
}

@Injectable({
  providedIn: "root"
})
export class MembersService {
  constructor(private http: HttpClient) {}
  private membersfetch = "api/members";

  fetchmembers() {
    return this.http.get<members>(this.membersfetch);
  }
}
