import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function FilterByTag({ value, onChange }) {
  return (
    <FormControl
      sx={{
        minWidth: 180,
        marginLeft: "10px",
        borderRadius: "100px",
        backgroundColor: "rgb(255, 255, 255)",
      }}
    >
      <InputLabel id="tag-filter-label" sx={{ pt: 2, fontSize: "0.75rem" }}>
        Filter by Tag
      </InputLabel>
      <Select
        labelId="tag-filter-label"
        id="tag-filter"
        value={value}
        label="Filter by Tag"
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
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="waterproof">Waterproof</MenuItem>
        <MenuItem value="recycled">Recycled</MenuItem>
      </Select>
    </FormControl>
  );
}

export default FilterByTag;
