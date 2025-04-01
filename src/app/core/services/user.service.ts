import { Injectable, Injector } from '@angular/core';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { ApiService } from './api.service';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiService {
  public currentUser$: ReplaySubject<UserModel | null> = new ReplaySubject<UserModel | null>(1);
  public user!: UserModel | null;
  public isLoggedIn: boolean = false;

  constructor(protected override injector: Injector) {
    super(injector);
  }

  getUserInfo(): Observable<UserModel> {
    return this.get<UserModel>(['auth', 'me']).pipe(
      map((user: UserModel) => new UserModel(user)),
      tap((user: UserModel) => this.currentUser$.next(new UserModel(user))),
    );
  }
}
