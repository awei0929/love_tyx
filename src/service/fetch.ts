import { ERROR_CODE } from '@/constants/errorCode';
import store from '@/redux';
import { logout } from '@/redux/global';
import service from '@bhb-frontend/utils/lib/request';
import { Notification } from '@arco-design/web-react';

// 全局配置
service.setGlobalConfig({
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  timeout: 10000,
});

service.interceptors.request(config => {
  if (!config.headers) return config;

  // token
  const token = localStorage.getItem('token');
  token && (config.headers.token = token);
  return config;
});

service.interceptors.response(response => {
  const { error, message } = response.body;

  if (error && error !== 0) {
    // 登陆过期
    if ([ERROR_CODE.TOKEN_EXPIRE].includes(error)) {
      // 退出登录
      store.dispatch(logout());
    }

    // 错误提示
    Notification.error({ title: '错误', content: message });
  }

  return response;
});
export default service;
