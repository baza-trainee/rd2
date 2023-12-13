export class AccessTokenService {
  public setAccessToken(accessToken: string) {
    localStorage.setItem("access_token", accessToken);
  }

  public getAccessToken(): string | null {
    return localStorage.getItem("access_token");
  }

  public removeAccessToken() {
    localStorage.removeItem("access_token");
  }
}
