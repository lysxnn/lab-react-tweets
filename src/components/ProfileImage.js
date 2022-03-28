function ProfileImage({ tweetProperty }) {
  return <img src={tweetProperty.user.image} className="profile" alt="profile pic" />;
}

export default ProfileImage;
