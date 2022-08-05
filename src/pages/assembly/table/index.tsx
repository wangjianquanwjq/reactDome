import React from 'react';
import * as Api from './api/sever';
import { AySearchTable, AySearchTableField } from 'amiya';
import { listApi } from './api/sever';
import Table from '@/components/table';
export default () => {
  const fields: Array<AySearchTableField> = [
    {
      title: '姓名',
      key: 'cn',
    },
    {
      title: '编号',
      key: 'index',
    },
    {
      title: '描述',
      key: 'des',
    },
  ];
  let params = {
    placeId: 146,
    pageSize: 10,
    start: 0,
  };
  return (
    <>
      {/* <Table /> */}
      {/* <AySearchTable api={listApi(params)} title="简易表格" fields={fields} rowKey="sort_id" /> */}

      {/* 请求接口测试 */}
      {/* <span
        onClick={() => {
          let params = {
            pageSize: 10,
            start: 0,
          };
          Api.apiTest1(params).then((res) => {
            console.log('get :', res);
          });
        }}
      >
        表格
      </span>
      <br />
      <span
        onClick={() => {
          let params = {
            placeId: 146,
            pageSize: 10,
            start: 0,
          };
          Api.apiTest2(params).then((res) => {
            console.log('get :', res);
          });
        }}
      >
        表格
      </span> */}
    </>
  );
};
