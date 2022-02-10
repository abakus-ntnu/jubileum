import Image from "next/image";
import { Box } from "@mui/material";

interface CircularImageProps {
  size: number;
  src: string;
  alt: string;
}

const CircularImage = ({ size, src, alt }: CircularImageProps) => {
  return (
    <Box
      sx={{
        height: size,
        width: size,
        borderRadius: size / 2,
        overflow: "hidden",
      }}
    >
      <Image layout="fixed" src={src} width={size} height={size} alt={alt} />
    </Box>
  );
};

export default CircularImage;
