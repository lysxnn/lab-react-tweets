function User({tweetProperty}) {
    return (
      <span className="user">
        <span className="name"> {tweetProperty.user.name}</span>
        <span className="handle">{tweetProperty.user.handle}</span>
      </span>
    );
}

export default User;