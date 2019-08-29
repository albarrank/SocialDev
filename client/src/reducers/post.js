import {
    GET_POSTS,
    GET_POST,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST
} from '../actions/types';

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_POST: 
            return {
                ...state,
                posts: [payload, ...state.posts],
                loading: false
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post._id !== payload),
                loading: false
            }
        case UPDATE_LIKES: 
        return {
            ...state,
            posts: state.posts.map((post) => 
                post._id === payload.postId ? {...post, like: payload.likes } : post 
                ),
                loading: false
            };
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false
            };
        case GET_POST:
                return {
                    ...state,
                    post: payload
                }
        case POST_ERROR: 
            return {
                ...state,
                error: payload,
                loading: false
            };
        default: 
            return state;
    };
}