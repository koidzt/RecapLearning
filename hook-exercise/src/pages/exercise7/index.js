import React, { useState } from 'react';
import Instruction from '../../components/instruction';
import mockedPosts from '../../assets/mock/post';
/* Exercise */
// import PostList from '../../components/postList';

// function Exercise7() {
//   const [user, setUser] = useState('John');
//   return (
//     <div className="page-container">
//       <div className="theme-button"></div>
//       <Instruction
//         topic="Posts App"
//         description="Action menu need user's state to show 'You are John' instead of 'You are ...', So Context API ?"
//       />
//       <PostList posts={mockedPosts} />
//     </div>
//   );
// }

/* Answer */
import PostList from '../../components/postListE7';

const user = {
  name: 'John',
  token: 'token',
};

export const UserContext = React.createContext(user);

function Exercise7() {
  return (
    <UserContext.Provider value={user}>
      <div className="page-container">
        <div className="theme-button"></div>
        <Instruction
          topic="Posts App"
          description="Action menu need user's state to show 'You are John' instead of 'You are ...', So Context API ?"
        />
        <PostList posts={mockedPosts} />
      </div>
    </UserContext.Provider>
  );
}

export default Exercise7;