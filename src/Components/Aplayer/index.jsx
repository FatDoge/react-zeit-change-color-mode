import React from 'react';
import ReactAplayer from 'react-aplayer';

export default class App extends React.Component {
  // event binding example
  onPlay = () => {
    console.log('on play');
  };

  onPause = () => {
    console.log('on pause');
  };

  // example of access aplayer instance
  onInit = ap => {
    this.ap = ap;
  };

  render() {
    const props = {
      theme: '#F57F17',
      lrcType: 3,
      fixed: true,
      audio: [
        {
          name: '林宥嘉',
          artist: '伯乐',
          url: 'http://m7.music.126.net/20200422002311/cc3ac337eac5a7e96f0d11c86baf9c26/ymusic/7991/49a7/6384/6db13e939bef2439078815fa37fcc5ef.flac',
          cover: 'https://p1.music.126.net/JAp6-1gzU4o2vq9Xc8gXkA==/109951163167503126.jpg',
          lrc: "[00:00.000] 作曲 : 彭学斌\n[00:01.000] 作词 : 彭学斌\n[00:18.98]爱你的那一个 伤你的那一个\n[00:26.05]谁才是你爱情中的伯乐\n[00:34.13]放弃了这一个 然后等待着下一个\n[00:41.86]最后哪一个让你最舍不得\n[00:50.81]\n[01:12.00]感谢不能让别人来说\n[01:18.03]你给过我的 他们是做不到的\n[01:26.18]那时候的幸福是真的\n[01:34.28]虽然过去了 我们也都经历了\n[01:40.17]\n[01:42.52]释怀教育着仇恨 和平劝着天下人\n[01:50.92]故事发生了便住下了 不管好的坏的\n[01:59.76]你让我成长了 就算是痛得值得\n[02:10.01]\n[02:10.75]爱你的那一个 伤你的那一个\n[02:18.31]谁才是你爱情中的伯乐\n[02:26.57]放弃了这一个 然后等待着下一个\n[02:34.36]一个个过客过得快不快乐\n[02:43.81]\n[03:24.93]爱你的那一个 伤你的那一个\n[03:32.79]谁才是你爱情中的伯乐\n[03:40.17]放弃了这一个 然后等待着下一个\n[03:48.47]别太多过客祝你早日快乐\n[03:55.85]\n[03:57.32]离开时别忘了 看看眼前的人\n[04:04.38]流泪记住了 还是微笑祝福着\n[04:20.29]\n",
          theme: '#ebd0c2'
        }
      ]
    };

    return (
      <div>
        <ReactAplayer
          {...props}
          onInit={this.onInit}
          onPlay={this.onPlay}
          onPause={this.onPause}
        />
        {/* example of access aplayer instance API */}
        {/* <button onClick={() => this.ap.toggle()}>toggle</button> */}
      </div>
    );
  }
}