const library = {
       tracks: { t01: { id: "t01",
                        name: "Code Monkey",
                        artist: "Jonathan Coulton",
                        album: "Thing a Week Three" },
                 t02: { id: "t02",
                        name: "Model View Controller",
                        artist: "James Dempsey",
                        album: "WWDC 2003"},
                 t03: { id: "t03",
                        name: "Four Thirty-Three",
                        artist: "John Cage",
                        album: "Woodstock 1952"}
               },
       playlists: { p01: { id: "p01",
                           name: "Coding Music",
                           tracks: ["t01", "t02"]
                         },
                    p02: { id: "p02",
                           name: "Other Playlist",
                           tracks: ["t03"]
                         }
                   }
     };
     
     /////////////////////////////
     // FUNCTIONS TO IMPLEMENT:
     /////////////////////////////
     
     // prints a list of all playlists, in the form:
     // p01: Coding Music - 2 tracks
     // p02: Other Playlist - 1 tracks
     const printPlaylists = function() {
       for (let play in library.playlists) {
            const playlist = library.playlists[play];
            console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`)
       }
     
     };
     //printPlaylists();
     
     // prints a list of all tracks, using the following format:
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     // t03: Four Thirty-Three by John Cage (Woodstock 1952)
     const printTracks = function() {
     for (let play in library.tracks) {
         const track = library.tracks[play];
         console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
     }
     }
     //printTracks();
     
     // prints a list of tracks for a given playlist, using the following format:
     // p01: Coding Music - 2 tracks
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     const printPlaylist = function(playlistId) {
       for (let pId in library.playlists) {
         if (pId === playlistId) {
           const playlist = library.playlists[pId];
           console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`)
           const playlistTracks = library.playlists[pId].tracks;
           for (let tId of playlistTracks) {
             // tId = t01 
             const track = library.tracks[tId]
              console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
           }
         }
       }
     
     };
     //printPlaylist();
     
     // adds an existing track to an existing playlist
     const addTrackToPlaylist = function(trackId, playlistId) {
     library.playlists[playlistId].tracks.push(trackId);
     }
     
     
     // generates a unique id
     // (already implemented: use this for addTrack and addPlaylist)
     const generateUid = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
     }
     
     
     // adds a track to the library
     const addTrack = function(name, artist, album) {
     
     let trackKeys = Object.keys(library.tracks);
     let indexOfKeyInArray = trackKeys.length - 1;
     let lastKeyInArray = trackKeys[indexOfKeyInArray]; 
     let trackId = parseInt(lastKeyInArray.split('t')[1]);
     trackId++;
     let newTrackId;
     if (trackId <= 9) {
       newTrackId = String("t0"+trackId);
      } else {
       newTrackId = String("t"+trackId);
      }
     
     
     const newTrack = {
       id: newTrackId,
       name: name,
       artist: artist,
       album: album
     }
     
     library.tracks[newTrackId] = newTrack;
     console.log(library);
     }
     //addTrack("mekus", "slowdog","why me lord")
     
     // adds a playlist to the library
     const addPlaylist = function(name) {
       let playlistkeys = Object.keys(library.playlists);
       let indexOfKeyInArray = playlistkeys.length - 1;
       let lastKeyInArray = playlistkeys[indexOfKeyInArray];
       let playlistId = parseInt(lastKeyInArray.split('p')[1]);
     playlistId++;
     let newplaylistId;
     if (playlistId <= 9) {
       newplaylistId = String("p0"+playlistId);
      } else {
       newplaylistId = String("t"+playlistId);
      }
     
      const newplaylist = {
       id: newplaylistId,
       name: name,
       tracks: []
     }
     library.playlists[newplaylistId] = newplaylist;
     console.log(library); 
     
     }
     addPlaylist("Henry");
     
     // STRETCH:
     // given a query string string, prints a list of tracks
     // where the name, artist or album contains the query string (case insensitive)
     // tip: use "string".search("tri") 
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
     const printSearchResults = function(query) {
     
     }