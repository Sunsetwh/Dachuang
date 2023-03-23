const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

// 设置静态文件夹路径
app.use(express.static('../image'));

// 处理根路径请求，返回包含所有图片的 HTML 内容
app.get('/', function(req, res) {
  let html = '<html><head><title>My Images</title></head><body>';

  // 获取静态文件夹中的所有图片
  const fs = require('fs');
  const path = require('path');
  const imagesFolderPath = path.join(__dirname, '../image');
  const images = fs.readdirSync(imagesFolderPath);

  // 将所有图片插入到 HTML 内容中
  for (let i = 0; i < images.length; i++) {
    html += `<img src="./${images[i]}" />`;
  }

  html += '</body></html>';
  res.send(html);
});

// 启动服务器
app.listen(4000, function() {
  console.log('Server started on port 4000');
});
