export class RefreshTokenService {
  private refreshToken: string | null;

  constructor(token: string) {
    this.refreshToken = token;
  }

  public setRefreshToken() {
    localStorage.setItem("refresh-token", this.refreshToken as string);
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem("refresh-token");
  }

  public removeRefreshToken() {
    localStorage.removeItem("refresh-token");
  }
}
