import { Button, Form, Input, Space, Modal } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import { useState, useRef } from 'react';
import { history } from 'umi';
import Styles from './index.less';
import BindDevice from './bindDevice';
export default () => {
  let pageSize = 10;
  let page = 1;
  const [queryForm] = Form.useForm();

  const childRef = useRef();
  const [pagination, setPagination] = useState<any>({
    total: 100,
    showTotal: () => `共0条`,
    pageSize: pageSize,
    pageSizeOptions: [10, 20, 50, 100],
    showSizeChanger: true,
    current: page,
  });
  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  const columns: ColumnsType<DataType> = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '性别',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '出生日期',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '联系电话',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '身份证号码',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '详细地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              childRef.current?.changeVal();
            }}
          >
            绑定设备
          </a>
          <a>编辑</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  // 表格分页
  const handleTableChange = (pagination: any, filters: any, sorter: any) => {};
  return (
    <>
      <div className={Styles.title}>老人列表</div>
      {/* 主体内容 */}
      <div className={Styles.content}>
        {/* 查询条件 */}
        <div className={Styles.query}>
          <Form layout={'inline'} form={queryForm}>
            <Form.Item label="查询条件：" name="name">
              <Input placeholder="请输入姓名" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="请输入联系电话" name="phone" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="请输入身份证号码" name="code" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" className={Styles.queryBut}>
                查询
              </Button>
            </Form.Item>
            <Form.Item>
              <Button className={Styles.resetBut}>重置</Button>
            </Form.Item>
          </Form>
        </div>
        {/* 新增导出按钮 */}
        <div className={Styles.butAdd}>
          <Space>
            <Button
              type="primary"
              className={Styles.queryBut}
              onClick={() => {
                history.push({
                  pathname: '/assembly/addEdit',
                });
              }}
            >
              老人入住
            </Button>
            <Button className={Styles.exportBut}>批量导出</Button>
          </Space>
        </div>
        {/* 表格 */}
        <div className={Styles.tab}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ ...pagination }}
            rowkey={'id'}
          />
        </div>
      </div>
      <BindDevice ref={childRef} />
    </>
  );
};
