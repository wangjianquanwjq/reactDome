import { Button, Col, Row, Form, Input, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import {
  LoadingOutlined,
  PlusOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState } from 'react';
import Styles from './index.less';
import TextArea from 'antd/lib/input/TextArea';
import { Space } from 'antd/lib';
export default () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const [imageUrl, setImageUrl] = useState<string>();
  const [loading, setLoading] = useState(false);
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <div className={Styles.title}>老人列表</div>
      <div className={Styles.content}>
        <Form layout="horizontal" form={form}>
          <div className={Styles.sonTitle}>老人基本信息</div>
          <Row gutter={[24, 16]}>
            {/* 左边 */}
            <Col span={18}>
              <Row gutter={[24, 16]}>
                <Col span={8}>
                  <Form.Item
                    label="姓名："
                    name="name"
                    rules={[{ required: true, message: '请输入姓名' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="手机号："
                    name="phone"
                    rules={[{ required: true, message: '请输入手机号' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="身份证号码："
                    name="code"
                    rules={[{ required: true, message: '请输入姓身份证号' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[24, 16]}>
                <Col span={8}>
                  <Form.Item
                    label="性别："
                    name="sex"
                    rules={[{ required: true, message: '请选择性别' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="年龄："
                    name="age"
                    rules={[{ required: true, message: '请输入姓身份证号' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="出生日期："
                    name="date"
                    rules={[{ required: true, message: '请输入姓身份证号' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[24, 16]}>
                <Col span={8}>
                  <Form.Item
                    label="地址："
                    name="address"
                    rules={[{ required: true, message: '请输入姓身份证号' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[24, 16]}>
                <Col span={16}>
                  <Form.Item
                    label="详细地址："
                    name="detailedAddress"
                    rules={[{ required: true, message: '请输入姓身份证号' }]}
                  >
                    <div style={{ display: 'flex' }}>
                      <Input />
                      &emsp;
                      <Button className={Styles.exportBut}>获取经纬度</Button>
                    </div>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[24, 16]}>
                <Col span={4}>
                  <Form.Item
                    label="经度："
                    name="long"
                    rules={[{ required: true, message: '请输入姓身份证号' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item
                    label="纬度："
                    name="lat"
                    rules={[{ required: true, message: '请输入姓身份证号' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            {/* 右边的头像上传 */}
            <Col span={6}>
              <Form.Item name="avatar">
                <ImgCrop rotate>
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="avatar"
                        style={{ width: '100%' }}
                      />
                    ) : (
                      uploadButton
                    )}
                  </Upload>
                </ImgCrop>
              </Form.Item>
            </Col>
          </Row>
          <div className={Styles.sonTitle}>健康信息</div>
          <Row gutter={[24, 16]}>
            <Col span={18}>
              <Form.Item name="physicalCondition">
                <TextArea rows={4} placeholder="请输入当前身体状况" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 16]}>
            <Col span={18}>
              <Form.Item name="medicalHistory">
                <TextArea rows={4} placeholder="请输入请输入病史" />
              </Form.Item>
            </Col>
          </Row>
          <div className={Styles.sonTitle}>亲友信息</div>
          <Row gutter={[24, 16]}>
            <Col span={20}>
              <Form.List
                name="friends"
                initialValue={[{ name: '', relationship: '', phone: '' }]}
              >
                {(
                  fields: { [x: string]: any; key: any; name: any }[],
                  { add, remove }: any,
                ) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Row gutter={[24, 16]} key={key}>
                        <Col span={7}>
                          <Form.Item
                            {...restField}
                            name={[name, 'nama']}
                            rules={[{ required: true, message: '请输入姓名' }]}
                          >
                            <Input placeholder="请输入姓名" />
                          </Form.Item>
                        </Col>
                        <Col span={7}>
                          <Form.Item
                            {...restField}
                            name={[name, 'relationship']}
                            rules={[
                              { required: true, message: '请选择与老人关系' },
                            ]}
                          >
                            <Input placeholder="请选择与老人关系" />
                          </Form.Item>
                        </Col>
                        <Col span={7}>
                          <Form.Item
                            {...restField}
                            name={[name, 'phone']}
                            rules={[
                              { required: true, message: '请输入联系电话' },
                            ]}
                          >
                            <Input placeholder="请输入联系电话" />
                          </Form.Item>
                        </Col>
                        <Col span={2}>
                          <MinusCircleOutlined onClick={() => remove(name)} />
                        </Col>
                      </Row>
                    ))}
                    {/* <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Add field
                                        </Button>
                                    </Form.Item> */}
                  </>
                )}
              </Form.List>
            </Col>
          </Row>
        </Form>
        <Button
          type="primary"
          className={Styles.queryBut}
          onClick={() => {
            form.validateFields().then((res) => {
              console.log(res);
            });
          }}
        >
          保存
        </Button>
        &emsp;
        <Button className={Styles.resetBut}>取消</Button>
      </div>
    </>
  );
};
