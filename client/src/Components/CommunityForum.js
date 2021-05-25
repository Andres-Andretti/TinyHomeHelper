import React from "react";
import Feed from "./Feed";
import "./CSS/CommunityForum.css"

function CommunityForum() {
  return (
    <div className="communityForum">
      <div>
        <h1 className="forumTitle">Welcome to the Community Forum!</h1>
        <h4 className="subheaderforumTitle"><i>
          <a href="/login">Login</a> to ask a question or share what you're working on</i>
        </h4>
      </div>
      <div className="communityForum__body">
        <Feed />
      </div>
    </div>
  );
}

export default CommunityForum;