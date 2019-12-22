// pages/yk/yk.js
Page({


  data: {

  },

  //停止
  stop: function () {
    this.send(0);
  },

  //前进
  forward: function () {
    this.send(1);
  },

  //后退
  backward: function () {
    this.send(2);
  },

  //左转
  turnleft: function () {
    this.send(3);
  },

  //右转
  turnright: function () {
    this.send(4);
  },


  zs: function () {
    this.send(5);
  },


  zx: function () {
    this.send(6);
  },


  ys: function () {
    this.send(7);
  },


  yx: function () {
    this.send(8);
  },
  send: function (e) {
    var that = this;
    let buffer = new ArrayBuffer(1);
    let dataView = new DataView(buffer);
    dataView.setUint8(0, Number(e));

    wx.writeBLECharacteristicValue({
      deviceId: that.data.connectedDeviceId,
      serviceId: serviceId,
      characteristicId: characteristicId,
      value: buffer,
      success: function (res) {
      }
    })
  },
})