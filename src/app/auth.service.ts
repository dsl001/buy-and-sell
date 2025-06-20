import { Injectable, signal } from '@angular/core';
import { Auth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user = signal<User | null>(null);

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.user.set(user);
    })
  }

  get currentUser(): User | null {
    return this.user();
  }

  isSignedIn(): boolean {
    return !!this.user;
  }

  isGoogleUser(): boolean {
    let isGoogleUser = false;

    const user = this.user();

    if (user) {
      isGoogleUser = user.providerData.some((provider) => provider.providerId === "google.com");
    }

    return isGoogleUser;
  }

  signInWithGoogle(): void {
    signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  signOut(): void {
    this.auth.signOut();
  }
}
