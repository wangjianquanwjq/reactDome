export const AppConfigPro = {
  datasource: {
    // 租户端
    tenant: {
      baseUrl: '/api/tenant-api-13',
    },
    // 护理端
    nurse: {
      baseUrl: '/api/tenant-api-13',
    },
    // 会员端
    member: {
      baseUrl: '/api/operation-api',
    },
    // 运营端
    operation: {
      baseUrl: '/api/operation-api',
    },
    // 物联网
    iot: {
      baseUrl: '/api/iot-manage-api',
    },
    iotServer: {
      baseUrl: '/api/iot-query-api',
    },
    // 文件服务器
    fileServer: {
      baseUrl: '/api/file-api',
    },
    // 预警
    warningServer: {
      baseUrl: '/api/warning-api',
    },
  },
};
