import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function SortByPrice({ value, onChange }) {
  return (
    <FormControl
      size="medium"
      sx={{
        minWidth: 170,
        borderRadius: "100px",
        backgroundColor: "rgb(255, 255, 255)",
      }}
    >
      <InputLabel
        id="demo-simple-select-label"
        sx={{ pt: 2, fontSize: "0.75rem" }}
      >
        Sort by Price
      </InputLabel>
      <Select
        id="price-sort"
        value={value}
        label="Sort by Price"
        onChange={onChange}
        sx={{
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            border: 0,
          },
          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: 0,
            },

        }}
      >
        <MenuItem value="lowToHigh">Low to High</MenuItem>
        <MenuItem value="highToLow">High to Low</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SortByPrice;
