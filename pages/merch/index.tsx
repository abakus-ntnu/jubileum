import JubPage from "components/JubPage";
import MerchCard from "components/MerchCard";
import { merchItems } from "data/merchItem";
import { Grid } from "@mui/material";

const MerchPage = () => {
  return (
    <JubPage title="Merch" header="Jubileumsmerch">
      <Grid
        container
        m="auto"
        maxWidth={1500}
        justifyContent="center"
        spacing={2}
      >
        {merchItems.map((item) => (
          <Grid item key={item.title}>
            <MerchCard merchItem={item} />
          </Grid>
        ))}
      </Grid>
    </JubPage>
  );
};

export default MerchPage;
