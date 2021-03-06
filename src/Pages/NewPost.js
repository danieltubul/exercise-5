import React from 'react';
import axios from 'axios';


class NewPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: undefined,
            content: undefined,
            author: undefined,
        };
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value,
        })
    }
    handleContentChange = (e) => {
        this.setState({
            content: e.target.value,
        })
    }
    handleAuthorChange = (e) => {
        this.setState({
            author: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author,
        }

        axios.post('/posts', data).then(res => {
            const post = res.data;
            this.setState({title: '',
                                 content: '',
                                 author:''});
        })
    }

    render() {
        return (
            <div>
                <h1>Create new post</h1>
                <p>
                    <br/>
                    <input type="text" value={this.state.title} placeholder="Post title goes here..." size="54"
                           onChange={this.handleTitleChange}></input>
                    <br/><br/>
                    <textarea rows="8" cols="50" value={this.state.content} placeholder="Post content goes here..." onChange={this.handleContentChange}></textarea>
                    <br/><br/>
                    <input type="text" value={this.state.author} placeholder="Author" size="54" onChange={this.handleAuthorChange}></input>
                <br/><br/>
                    <input type="submit" value="Save post" onClick={this.handleSubmit}></input>
                </p>
            </div>
        );

    }
}

export default NewPost;














// import React from "react";
//
// function AddNewPost () {
//     return (
//         <div>
//             <h1>Create new post</h1>
//             <p>
//                 <form>
//                     <input type="text" placeholder="Post title goes here..." size="54"></input>
//                     <br/><br/>
//                     <textarea rows="8" cols="50" placeholder="Post content goes here..."></textarea>
//                     <br/><br/>
//                     <button type="submit">Save post</button>
//                 </form>
//             </p>
//         </div>
//     )
// }
//
// export default AddNewPost;