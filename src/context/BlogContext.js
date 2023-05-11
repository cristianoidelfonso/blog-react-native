import React from 'react';
import CreateDataContext from './CreateDataContext';

const BlogContext = React.createContext();

// const blogPosts = [
//     {title: 'Post #1'},
//     {title: 'Post #2'},
//     {title: 'Post #3'},
//     {title: 'Post #4'},
//     {title: 'Post #5'},
//     {title: 'Post #6'},
// ];

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            let postID = Math.floor(Math.random() * 99999)
            return [...state, {
                // title: `Blog Post #${state.length + 1}`
                id: postID,
                title: action.payload.title,
                content: action.payload.content,
            }];
        
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);

        case 'edit_blogpost':
            return state.map((blogPost) => {
                return (blogPost.id === action.payload.id) ? action.payload : blogPost ;
            }); 
        
        default:
            return state;
    }
}

const addBlogPost = dispatch => {
    return (
        (title, content, callback) => {
            dispatch({type: 'add_blogpost', payload: {title, content}});
            if(callback) {
                callback();  
            }
        }
    );
};

const deleteBlogPost = dispatch => {
    return (
        (id) => {
            dispatch({type: 'delete_blogpost', payload: id})
        }
    );
};

const editBlogPost = dispatch => {
    return (
        (id, title, content, callback) => {
            dispatch({type: 'edit_blogpost', payload: {id, title, content}});
            if(callback) {
                callback();
            }
        }
    );
};

export const { Context, Provider } = CreateDataContext(
    blogReducer,
    {
        addBlogPost,
        deleteBlogPost,
        editBlogPost,
    },
    [
        {title: 'Teste 1', content: 'Conteudo 1', id: 1},
        {title: 'Teste 2', content: 'Conteudo 2', id: 2},
        {title: 'Teste 3', content: 'Conteudo 3', id: 3},
        {title: 'Teste 4', content: 'Conteudo 4', id: 4},
        {title: 'Teste 5', content: 'Conteudo 5', id: 5},
    ]
);