import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamps from "./Timestamps";
import User from "./User";

function Tweet({ tweetProperty }) {
  return (
    <div className="tweet">
      <ProfileImage tweetProperty={tweetProperty} />

      <div className="body">
        <div className="top">
          <User tweetProperty={tweetProperty} />
          <Timestamps tweetProperty={tweetProperty} />
        </div>
        <Message tweetProperty={tweetProperty} />
        {/* Font Awesome icons */}
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
