const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    {id: 1, message: 'Hi', likesCount: 12},
    {id: 2, message: "It's my first post!", likesCount: 30}
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts[state.posts.length - 1].id + 1,
        message: state.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: ''
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer
