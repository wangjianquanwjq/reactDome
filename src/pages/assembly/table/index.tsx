import React from 'react';
import * as Api from './api/sever';
export default () => {
  return (
    <>
      <span
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
      </span>
    </>
  );
};
