export class RefreshTokenService {
  public setRefreshToken(refreshToken: string) {
    localStorage.setItem("refresh_token", refreshToken);
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem("refresh_token");
  }

  public removeRefreshToken() {
    localStorage.removeItem("refresh_token");
  }
}
