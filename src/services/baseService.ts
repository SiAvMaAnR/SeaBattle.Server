interface IJwtUser {
  id: number;
  login: string;
}

abstract class BaseService {
  private _user: IJwtUser;

  public get user(): IJwtUser {
    return this._user;
  }

  public setUser(user: IJwtUser) {
    this._user = user;
  }
}

export { IJwtUser };
export default BaseService;
