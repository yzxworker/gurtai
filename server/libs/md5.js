const crypto=require('crypto');

module.exports={
  MD5_SUFFIX: 'alsijnoa8ihewocxnal你拉开你手动啊扫ihfqdn AOIJDOPQW没牛A四u',
  md5: function (str){
    var obj=crypto.createHash('md5');

    obj.update(str);

    return obj.digest('hex');
  }
};

