import Image from "next/image";
import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

interface CircularImageProps {
  size: number;
  src: string;
  alt: string;
  sx?: SxProps<Theme>;
}

const CircularImage = ({ size, src, alt, sx }: CircularImageProps) => {
  return (
    <Box
      sx={{
        height: size,
        width: size,
        borderRadius: size / 2,
        overflow: "hidden",
        ...sx,
      }}
    >
      <Image layout="fixed" src={src} width={size} height={size} alt={alt} />
    </Box>
  );
};

export default CircularImage;
