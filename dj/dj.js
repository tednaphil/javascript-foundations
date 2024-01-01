function createSong(name, artist, favorite) {
  return {
    name,
    artist,
    favorite: favorite || false,
    hasBeenPlayed: false
  }
}

function playSong(song) {
  song.hasBeenPlayed = true
  return song
}

function makePlaylist(name, songsArray) {
  return {
    name,
    songs: songsArray
  }
}

function addSongToPlaylist(playlist, song) {
  playlist.songs.push(song)
  return playlist
}

function playSongs(playlist, favSelect) {
  if (favSelect) {
    playlist.songs.forEach((object) => {
      if (object.favorite) {
        object.hasBeenPlayed = true
      }
    })
    return playlist
  } else {
  playlist.songs.forEach((object) =>
    object.hasBeenPlayed = true)
    return playlist
  }
}



module.exports = { 
  createSong, 
  playSong, 
  makePlaylist, 
  addSongToPlaylist, 
  playSongs
};
