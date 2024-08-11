import { useEffect, useState } from "react";
import { bags } from "../data/data";
import { Box, Container, Grid, Typography } from "@mui/material";
import SortByPrice from "./common/SortByPrice";
import FilterByTag from "./common/FilterByTag";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

function Items() {
  const [data, setData] = useState([]);
  const [priceSortOrder, setPriceSortOrder] = useState("lowToHigh");
  const [selectedTag, setSelectedTag] = useState("all");

  useEffect(() => {
    const filterAndSortArray = () => {
      let filteredBags = [...bags];

      if (selectedTag !== "all") {
        filteredBags = filteredBags.filter(
          (bag) => bag.tag.toLowerCase() === selectedTag.toLowerCase()
        );
      }

      if (priceSortOrder === "lowToHigh") {
        filteredBags = filteredBags.sort((a, b) => a.price - b.price);
      } else if (priceSortOrder === "highToLow") {
        filteredBags = filteredBags.sort((a, b) => b.price - a.price);
      }

      setData(filteredBags);
    };

    filterAndSortArray();
  }, [priceSortOrder, selectedTag]);

  return (
    <div className="App">
      <Box sx={{ display: "flex", marginBottom: 2, marginTop: 7 }}>
        <SortByPrice
          value={priceSortOrder}
          onChange={(e) => setPriceSortOrder(e.target.value)}
        />
        <FilterByTag
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        />
      </Box>

        <Grid container spacing={1} sx={{ marginTop: "20px" }}>
          {data.map((bag) => (
            <Grid item md={3} key={bag.id}>
              <Card sx={{ maxWidth: 345, maxHeight: 500,  p: 2, mb: 3 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="70%"
                    image={bag.image}
                    alt={bag.name}
                    sx={{ width: '90%', margin: '0 auto', }}
                  
                  />
                  <CardContent sx={{ backgroundColor: "white" }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"1rem"}}>
                      {bag.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {`Price: ${bag.price}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {`Tag: ${bag.tag}`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
    </div>
  );
}

export default Items;
