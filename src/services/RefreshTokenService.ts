export class RefreshTokenService {
  private refreshToken: string | null;

  constructor(token: string) {
    this.refreshToken = token;
  }

  public setRefreshToken() {
    localStorage.setItem("token", this.refreshToken as string);
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem("token");
  }

  public removeRefreshToken() {
    localStorage.removeItem("token");
  }
}
