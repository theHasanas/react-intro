import styled from "styled-components";

const Card = styled.div`
  width: 200px;
  padding: 30px;
  background-color: papayawhip;
`;

const ProfilePicture = styled.img`
  width: 200px;
`;

const ProfileCard = () => {
  return (
    <Card>
      <ProfilePicture src="Profile.jpeg" alt="hasan profile" />

      <h5>Hasan</h5>
      <p>
        Hasan is a <strong>computer scientist</strong> from <i>Kuwait</i>.
      </p>
    </Card>
  );
};

export default ProfileCard;
