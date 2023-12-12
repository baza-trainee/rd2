export class AccessTokenService {
  private accessToken: string | null;

  constructor(token: string) {
    this.accessToken = token;
  }

  public setAccessToken() {
    localStorage.setItem("access-token", this.accessToken as string);
  }

  public getAccessToken(): string | null {
    return localStorage.getItem("access-token");
  }

  public removeAccessToken() {
    localStorage.removeItem("access-token");
  }
}
