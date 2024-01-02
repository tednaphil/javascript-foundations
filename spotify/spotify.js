function createCollection(name, description) {
  return {
      name,
      description,
      tracks: []
  }
}

function createTrack(title, artist, duration) {
  return {
    title: title || `unknown`,
    duration: duration || 0,
    artist: artist || `unknown`
  }
}

function reviewTrack(track) {
  if (track.artist === 'Red Hot Chili Peppers') {
    return `The song ${track.title} rules!`
  } else {
    return `I wish this was a Red Hot Chili Peppers song.`
  }
}

function addTrack(collection, track) {
  collection.tracks.push(track)
  return collection
}

function getTotalDuration(collection) {
  var duration = 0
  collection.tracks.forEach((object) => {
    duration += object.duration
  })
  return duration
}

function findTracksByArtist(collection, artist) {
  var results = []
  collection.tracks.forEach((object) => {
    if (object.artist === artist) {
      results.push(object)
    }
  })
  return results
}

  module.exports = {
    createCollection,
    createTrack,
    reviewTrack,
    addTrack,
    getTotalDuration,
    findTracksByArtist
    }