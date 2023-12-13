"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post() {
    }
    Post.prototype.sharePost = function () {
        console.log('2k post till date');
    };
    Post.prototype.Render = function () {
        console.log("Render from Post method");
    };
    Post.prototype.handleEvent = function () {
        console.log("HandleEvent from Post method");
    };
    return Post;
}());
var Comment = /** @class */ (function () {
    function Comment() {
    }
    Comment.prototype.sharePost = function () {
        console.log('1Lakh comments so far');
    };
    Comment.prototype.Render = function () {
        console.log("Render from Comment method");
    };
    Comment.prototype.handleEvent = function () {
        console.log("HandleEvent from Comment method");
    };
    return Comment;
}());
var Like = /** @class */ (function () {
    function Like() {
    }
    Like.prototype.sharePost = function () {
        console.log('50K Likes so far');
    };
    Like.prototype.Render = function () {
        console.log("Render from Like method");
    };
    Like.prototype.handleEvent = function () {
        console.log("HandleEvent from Like method");
    };
    return Like;
}());
var postObj = new Post();
var commentObj = new Comment();
var likeObj = new Like();
postObj.Render();
postObj.handleEvent();
postObj.sharePost();
commentObj.Render();
commentObj.handleEvent();
commentObj.sharePost();
likeObj.Render();
likeObj.handleEvent();
likeObj.sharePost();
