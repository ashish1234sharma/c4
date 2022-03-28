import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const NotFound = () => {
  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: "50vh" }}>
      {/* Show some 404 not found image or component here */}
      <Typography variant="h4" component="div">
        404 - Not Found
      </Typography>
    </Stack>
  );
};
