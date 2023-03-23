// 获取JSON数据
fetch('../static/audio.json')
  .then(response => response.json())
  .then(data => {
      // 将数据按起始时间排序
      data.sort((a, b) => a.start - b.start);

      const slider = document.getElementById('myRange');
      const sliderProgress = document.querySelector('.slider-progress');
      const wordsDiv = document.querySelector('.words');
      const timeDiv = document.querySelector('.time');

      // 计算时间段的数量
      const numSections = Math.ceil(data[data.length - 1].end / 10);

      // 根据时间段数量创建滑动条
      slider.max = numSections - 1;

      // 为滑动条添加事件处理程序
      slider.oninput = function () {
          const sectionStart = this.value * 10;
          const sectionEnd = sectionStart + 10;

      // 过滤出在当前时间段内的词语
      const sectionWords = data.filter(datum => datum.start >= sectionStart && datum.end <= sectionEnd)
          .map(datum => datum.word)
          .join(' ');

      // 在页面上展示当前时间段的词语
      wordsDiv.innerText = sectionWords;


      // 根据时间段内的词语数量美化滑动条
      const numWords = sectionWords.split(' ').length;
      const progressPercent = (numWords / data.length) * 100;
      sliderProgress.style.width = `${progressPercent}%`;

      // 显示当前时间段的起始时间
      const formattedStartTime = formatTime(sectionStart);
      const formattedEndTime = formatTime(sectionEnd);
      timeDiv.innerText = `${formattedStartTime} - ${formattedEndTime}`;
  };

  // 辅助函数：将秒数格式化为 "hh:mm:ss" 的形式
  function formatTime(seconds) {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor(seconds / 60) % 60;
      const s = seconds % 60;
      const formattedH = h.toString().padStart(2, '0');
      const formattedM = m.toString().padStart(2, '0');
      const formattedS = s.toString().padStart(2, '0');
      return `${formattedH}:${formattedM}:${formattedS}`;
  }
});
