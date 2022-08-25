import { Button, Modal } from 'antd';
import React, { useState, forwardRef, useImperativeHandle } from 'react';
export default forwardRef((props: any, ref: any) => {
  const { confirm } = Modal;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useImperativeHandle(ref, () => ({
    changeVal: (type: string, row: object) => {
      showModal();
    },
  }));
  return (
    <>
      <Modal
        title="设备绑定"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
});
