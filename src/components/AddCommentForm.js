import React, { useState } from "react";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentAdded, setCommentAdded] = useState(false); // State for tracking whether comment is added

  const addComments = async () => {
    // Your logic for adding comments goes here
    // For now, let's just set the state to indicate that comment is added
    setCommentAdded(true);
    // Clear input fields
    setUsername("");
    setCommentText("");
  };

  return (
    <form className='shadow rounded px-8 pt-6 pb-8 mb-4'>
      <h3 className='text-xl font-bold mb-4 text-gray-900'>Add a comment</h3>
      <label className='block text-gray-700 text-sm font-bold mb-2'>
        Name:
      </label>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
      <label className='block text-gray-700 text-sm font-bold mb-2'>
        Comment:
      </label>
      <textarea
        rows='4'
        cols='50'
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
      {commentAdded ? (
        <p className="text-gray-600 text-center">Comment section coming soon!</p>
      ) : (
        <button
          onClick={() => addComments()}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Add Comment
        </button>
      )}
    </form>
  );
};

export default AddCommentForm;
