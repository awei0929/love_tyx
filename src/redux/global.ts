import { ThunkAction } from 'redux-thunk';
import defaultSettings from '../settings.json';
import { removeLocalStorage } from '@/utils/manageStorage';

export interface GlobalState {
  settings?: typeof defaultSettings;
  token: string | undefined;
  userInfo: Partial<any>;
}

export enum GlobalActionType {
  /** 更新应用设置 */
  UPDATE_SETTINGS = 'update-settings',
  /** 更新用户信息 */
  UPDATE_USERINFO = 'update-userInfo',
  /** 更新token */
  UPDATE_TOKEN = 'update-token',
  /** 账号登出 */
  LOGOUT = 'logout',
}

export interface GlobalAction {
  type: GlobalActionType;
  payload: { [name: string]: any };
}

const initialState: GlobalState = {
  settings: defaultSettings,
  token: localStorage.getItem('token'),
  userInfo: {},
};

export default function (state = initialState, action: GlobalAction) {
  switch (action.type) {
    case GlobalActionType.UPDATE_SETTINGS: {
      const { settings } = action.payload;
      return {
        ...state,
        settings,
      };
    }
    case GlobalActionType.UPDATE_USERINFO: {
      const { userInfo } = action.payload;
      return {
        ...state,
        userInfo,
      };
    }
    case GlobalActionType.UPDATE_TOKEN: {
      const { token } = action.payload;
      localStorage.setItem('token', token);

      return {
        ...state,
        token,
      };
    }
    case GlobalActionType.LOGOUT: {
      removeLocalStorage('token');
      return {
        ...state,
        token: undefined,
        appNo: undefined,
        userInfo: {},
      };
    }
    default:
      return state;
  }
}

/**
 * 获取账号信息
 * @returns
 */
export function getAccountInfo(): ThunkAction<
  Promise<void>,
  GlobalState,
  unknown,
  GlobalAction
> {
  return function (_dispatch): Promise<void> {
    return Promise.resolve();
    // return axiosGetAccountInfo().then(({ data }) => {
    //   dispatch({ type: GlobalActionType.UPDATE_USERINFO, payload: { userInfo: data } });
    // });
  };
}

/**
 * 账号登出
 * @returns
 */
export function logout(): ThunkAction<
  Promise<void>,
  GlobalState,
  unknown,
  GlobalAction
> {
  return async function (dispatch): Promise<void> {
    dispatch({ type: GlobalActionType.LOGOUT, payload: {} });
    window.location.reload();
  };
}
