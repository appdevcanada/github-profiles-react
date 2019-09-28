import React from 'react';
import AppHeader from './AppHeader.js';
import ProfileCard from './ProfileCard.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maddProfs: ['prof3ssorSt3v3', 'papacharliepapa', 'adeshah'],
      profiles: []
    }
  }

  getInitialProfiles() {
    Promise.all(this.state.maddProfs.map(username =>
      fetch(`https://api.github.com/users/${username}`)))
      .then(responses => Promise.all(responses.map(res => {
        if (res.ok) {
          return res.json();
        } else {
          return 'Sth wrong';
        }
      })))
      .then(profiles => { this.setState({ profiles }) })
      .catch(err => console.error)
  }

  getProfiles = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`)
    if (response.ok) {
      const profiles = await response.json();
    }
  }

  componentDidMount() {
    this.getInitialProfiles();
  }

  render() {
    const profilesJSX = this.state.profiles.map(profile => (
      <ProfileCard key={profile.id} profile={profile} />
    ))
    return (
      <div className='App'>
        <AppHeader />
        <main style={{ padding: '1rem' }}>
          {profilesJSX}
        </main>
      </div>
    )
  }
}

export default App;
