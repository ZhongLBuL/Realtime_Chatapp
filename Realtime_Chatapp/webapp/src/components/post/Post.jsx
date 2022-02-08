import { useContext, useEffect, useState } from "react";
import './post.scss'

import { MoreVert, HighlightOff
} from "@material-ui/icons";

import { MoreVert } from "@material-ui/icons";

import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


export default function Post({ post, username, usertest }) {

export default function Post({ post }) {

    const [like, setLike] = useState(post.likes.length);
    const [isLike, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser } = useContext(AuthContext);


    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));

    useEffect(() => {
      setIsLiked(post.likes.includes(currentUser._id));

    }, [currentUser._id, post.likes]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        };
        fetchUser();
    }, [post.userId]);

    const likeHandler = () => {
        try {

            axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
        } catch (err) { }
        setLike(isLike ? like - 1 : like + 1);
        setIsLiked(!isLike);
    };

    const deletePost = () => {
        try {
            axios.delete("/posts/" + post._id,  { userId: currentUser._id });
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

          axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
        } catch (err) {}
        setLike(isLike? like - 1 : like + 1);
        setIsLiked(!isLike);
      };


    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user.username}`}>
                            <img
                                className="postProfileImg"
                                src={
                                    user.profilePicture
                                        ? PF + user.profilePicture
                                        : PF + "person/noAvatar.png"
                                }
                                alt=""
                            />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>

                    {username&& currentUser.username === usertest.username? <div className="postTopRight" onClick={deletePost}>
                        <HighlightOff
 />
                    </div> : <div className="postTopRight">
                        <MoreVert />
                    </div>}


                    <div className="postTopRight">
                        <MoreVert />
                    </div>

                </div>

                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF + post.img} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} alt="" className="likeIcon" onClick={likeHandler} />
                        <img src={`${PF}heart.png`} alt="" className="likeIcon" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people like it!</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
