// 获取容纳所有图片的 <div> 元素
const gallery = document.getElementById('image-container');

// 获取存放图片的文件夹路径
const imagesFolderPath = 'http://localhost:4000/';

// 发送 AJAX 请求，获取存放在文件夹中的所有图片
const xhr = new XMLHttpRequest();
xhr.open('GET', imagesFolderPath, true);
xhr.onload = function() {
  if (this.status === 200) {
    // 将返回的 HTML 内容转换为 DOM 对象
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(this.responseText, 'text/html');

    // 获取 HTML 对象中的所有图片元素
    const images = htmlDoc.getElementsByTagName('img');

    // 遍历所有图片元素，创建并插入到 <div> 中
      for (let i = 0; i < images.length; i++) {
        const img = document.createElement('img');
        img.src = imagesFolderPath + images[i].getAttribute('src');
        gallery.appendChild(img);
      }
  }
};
xhr.send();