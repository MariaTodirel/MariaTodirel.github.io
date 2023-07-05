const redirectToSpotifyArtist = (artistId) => {
    const spotifyUri = `spotify:playlist:${artistId}`;
    const spotifyLink = `https://open.spotify.com/playlist/${artistId}`;

    // Verificăm dacă browser-ul suportă protocolul 'spotify:'
    const isSpotifyProtocolSupported = window.open(spotifyUri, '_self');
    if (isSpotifyProtocolSupported) {
      // Dacă suportă, deschidem direct aplicația Spotify
      window.open(spotifyUri, '_self');
    } else {
      // Dacă nu suportă, deschidem link-ul către Spotify într-o nouă fereastră/tab
      window.open(spotifyLink, '_blank');
    }
  };

  const artistId = '37i9dQZF1E35fXWWfCacac'; // Înlocuiește cu ID-ul real al artistului
  const logoutBtn = document.getElementById('logout');

  logoutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    redirectToSpotifyArtist(artistId);
  });