import Image from "next/image";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { MerchItem } from "../data/merchItem";

const MerchCard = ({ merchItem }: { merchItem: MerchItem }) => {
  return (
    <Card sx={{ width: 1, height: 1 }}>
      <Stack justifyContent="space-between" height={1}>
        <Box>
          <CardMedia>
            <Box sx={{ width: "100%", height: 300, position: "relative" }}>
              <Image
                src={merchItem.image}
                objectFit="cover"
                alt="ribbon"
                layout="fill"
              />
            </Box>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {merchItem.title}
            </Typography>
            <Typography variant="body2">{merchItem.description} </Typography>
          </CardContent>
        </Box>
        <CardActions>
          {merchItem.buyLink && (
            <Button size="small" href={merchItem.buyLink}>
              Kjøp
            </Button>
          )}
          {merchItem.buyInfo && (
            <Typography gutterBottom ml={1} variant="body1">
              {merchItem.buyInfo}
            </Typography>
          )}
        </CardActions>
      </Stack>
    </Card>
  );
};

export default MerchCard;
