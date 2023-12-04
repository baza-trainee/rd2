export class AccessTokenService {
  private accessToken: string | null;

  constructor(token: string) {
    this.accessToken = token;
  }

  public setAccessToken() {
    localStorage.setItem("token", this.accessToken as string);
  }

  public getAccessToken(): string | null {
    return localStorage.getItem("token");
  }

  public removeAccessToken() {
    localStorage.removeItem("token");
  }
}
