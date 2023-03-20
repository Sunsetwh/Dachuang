const imagesContainer = document.getElementById('image-container');

// 设置要展示的图片路径
const imagesPath = 'localhost:8000/static/image/';

// 读取images文件夹下的所有图片文件
fetch(imagesPath)
  .then(response => response.text())
  .then(text => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(text, 'text/html');
    const imagesList = htmlDocument.querySelectorAll('a');

    // 遍历所有图片，创建img元素并添加到页面
    imagesList.forEach(image => {
      if (/\.(jpe?g|png|gif)$/i.test(image.href)) {
        const img = document.createElement('img');
        img.src = imagesPath + image.href.split('/').pop();
        imagesContainer.appendChild(img);
      }
    });
  })
  .catch(error => console.error(error));
