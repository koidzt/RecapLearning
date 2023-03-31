import React from 'react';
import Instruction from '../../components/instruction';
import mockedPosts from '../../assets/mock/post';
/* Exercise */
// import PostList from '../../components/postList';
/* Answer */
import PostList from '../../components/postListE9';

function Exercise9() {
  return (
    <div className="page-container">
      <Instruction
        topic="Posts App (useState)"
        description="Make Post App be able to Add / Edit / Delete with useState"
      />
      <PostList posts={mockedPosts} />
    </div>
  );
}

export default Exercise9;