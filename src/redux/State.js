import renderEntireTree from "../Render";

let names = [
    {name: 'Mark', id: 1},
    {name: 'Kolya', id: 2},
    {name: 'Vitality', id: 3},
];
let messages = [
    {message: 'message 1'},
    {message: 'message 2'},
    {message: 'message 3'},
];
let posts = [
    {post: 'This is the first message', id: 1},
    {post: 'let me go', id: 2},
]

let data = {
    profilePage : {
        names: names,
        posts: posts,
        newPostText: 'kamario',
    },
    chatPage: {
        messages,
    },
};

export let addPost = (post) =>
{
    let temp = {
        post: post.post, id: 3
    };
    data.profilePage.posts.push(temp);
    renderEntireTree(data);
}

export let updateNewPostText = (newText) =>
{
    data.profilePage.newPostText = newText;
    renderEntireTree(data);
}

export default data;