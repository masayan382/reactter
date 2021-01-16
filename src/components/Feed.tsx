import React from 'react';
import { auth } from '../firebase';

const Feed = () => {
  return (
    <div>
      FEED
      <button onClick={()=>{auth.signOut()}}>logout</button>
    </div>
  )
}

export default Feed
