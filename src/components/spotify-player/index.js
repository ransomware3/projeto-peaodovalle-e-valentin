// import React, { useEffect, useState } from 'react'

// const SpotifyPlayer = () => {
//     const [player, setPlayer] = useState(null);

//     useEffect(() => {
//         window.onSpotifyWebPlaybackSDKReady = () => {
//             const token = '67f58a02df32450e99ec736b8ca73772'
//             const newPlayer = new window.Spotify.Player({
//                 name: 'Web Playback SDK Quick Start Player',
//                 getOAuthToken: cb => { cb(token); }
//             });

//             setPlayer(newPlayer)

//             newPlayer.addListener('ready', ({ device_id }) => {
//                 console.log('Ready with Device ID', device_id)
//             });

//             newPlayer.connect()
//         }
//     }, [])

//     return <div id="spotify-player"></div>
// }

// export { SpotifyPlayer }
