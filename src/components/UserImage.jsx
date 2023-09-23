import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
        {/* object fit will cover entire space as needed and crop as needed
        Border readius allows it to be a circle*/}
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${process.env.REACT_APP_API_BASE_URL}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;