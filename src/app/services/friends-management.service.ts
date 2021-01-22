import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/user';
const baseUrlPost = 'http://localhost:3000/post';

@Injectable({
  providedIn: 'root',
})
export class FriendsManagementService {
  constructor(private http: HttpClient) {}

  update(data): Observable<any> {
    return this.http.put(`${baseUrl}/link-up`, data);
  }

  getAllFriends(email): Observable<any> {
    return this.http.get(`${baseUrl}/friends-list/${email}`);
  }

  getUpdateFriends(email): Observable<any> {
    return this.http.get(`${baseUrl}/friends-update-list/${email}`);
  }

  blockFriend(data): Observable<any> {
    return this.http.put(`${baseUrl}/block-friend`, data);
  }

  unblockFriend(data): Observable<any> {
    return this.http.put(`${baseUrl}/unblock-friend`, data);
  }

  subscribeUpdate(data): Observable<any> {
    return this.http.put(`${baseUrl}/subscribe-update`, data);
  }

  unsubscribeUpdate(data): Observable<any> {
    return this.http.put(`${baseUrl}/unsubscribe-update`, data);
  }

  getCommonFriends(data): Observable<any> {
    return this.http.post(`${baseUrl}/common-friends`, data);
  }

  postUpdates(data): Observable<any> {
    return this.http.post(`${baseUrlPost}/update`, data);
  }
}
