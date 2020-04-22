import React from 'react';
import ReactAplayer from 'react-aplayer';
import { fetchLrc, fetchMusicDetail, playlistDetail } from '../../services/aplayer'
import { renderMusicSrc } from '../../utils'
import './style.css'

export default class App extends React.Component {

  state = {
    playlistId: 89196865,
    playlist: [],
    ap: null
  }

  componentDidMount = () =>{
    this.renderMusicList();
  }

  renderMusicList = async () => {
    const { playlistId } = this.state;
    const { playlist: { trackIds } } = await playlistDetail(playlistId);
    let ids, musicList=[],promiseList=[];
    if(trackIds.length) {
      ids = trackIds.map( e => e.id)
      promiseList = trackIds.map( e => fetchLrc(e.id))
    }


    const { songs } = await fetchMusicDetail(ids.join(','))
    // const lrcList = await Promise.all(promiseList)

    if(songs.length) {
      musicList = songs.map( e => ({
        name: e.name,
        url: renderMusicSrc(e.id),
        cover: e.al&&e.al.picUrl,
        artist: e.al&&e.al.name
      }))
      .map( i => ({
        ...i,
        lrc: '[00:00.00]'
      }))
      
    }
    this.setState({
      playlist: musicList
    })


    this.state.ap.list.hide()
    this.state.ap.list.add(musicList)
  }
  // event binding exampler
  onPlay = (e) => {
    console.log('on play', e);
  };

  onPause = () => {
    console.log('on pause');
  };

  // example of access aplayer instance
  onInit = ap => {
    this.ap = ap;
    this.setState({ ap })
  };

  render() {
    const { playlist } = this.state
    const props = {
      theme: 'white',
      lrcType: 1,
      fixed: true,
      audio: playlist
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