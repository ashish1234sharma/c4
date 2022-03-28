import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const LoginSignUp = () => {
  const [showForm, setShowForm] = React.useState(true);
  return (
    <Paper sx={{ width: "300px", margin: "25px auto", p: "1px 24px 24px" }}>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{ mt: "25px" }}
      >
        <Button
          onClick={() => setShowForm(true)}
          sx={{
            fontSize: "18px",
            fontWeight: "700",
            opacity: showForm ? "1" : "0.5",
          }}
        >
          Login
        </Button>
        <Button
          onClick={() => setShowForm(false)}
          sx={{
            fontSize: "18px",
            fontWeight: "700",
            opacity: showForm ? "0.5" : "1",
          }}
        >
          SingUp
        </Button>
      </Stack>
      <Stack direction="row" justifyContent="center" className="loginSignUp">
        {showForm ? (
          <form className="login" onSubmit={(e) => {}}>
            <TextField
              type="text"
              className="name"
              label="name"
              onChange={(event) => {}}
              required
              size="small"
              sx={{ mb: "24px" }}
            />
            <br />
            <TextField
              type="text"
              className="password"
              label="password"
              onChange={(event) => {}}
              required
              size="small"
              sx={{ mb: "24px" }}
            />
            <br />
            <Button
              type="submit"
              variant="contained"
              className="submitLoginForm"
            >
              Login
            </Button>
          </form>
        ) : (
          <form className="signUp" onSubmit={(e) => {}}>
            <TextField
              type="text"
              className="name"
              label="name"
              onChange={(event) => {}}
              required
              size="small"
              sx={{ mb: "24px" }}
            />
            <br />
            <TextField
              type="text"
              className="password"
              label="password"
              onChange={(event) => {}}
              required
              size="small"
              sx={{ mb: "24px" }}
            />
            <br />
            <select value={""} className="location" onChange={(event) => {}}>
              <option value=""></option>
              <option value="bangalore">Bangalore</option>
              <option value="kolkata">Kolkata</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
            </select>
            <label>Interests</label>
            <br />
            <label>technology</label>
            <TextField
              type="checkbox"
              className="technology"
              onChange={(event) => {}}
            />
            <br />
            <label>food</label>
            <TextField
              type="checkbox"
              className="food"
              onChange={(event) => {}}
              size="small"
            />
            <br />
            <label>movies</label>
            <TextField
              type="checkbox"
              className="movies"
              onChange={(event) => {}}
            />
            <br />
            <label>culture</label>
            <TextField
              type="checkbox"
              className="culture"
              onChange={(event) => {}}
            />
            <br />
            <label>art</label>
            <TextField
              type="checkbox"
              className="art"
              onChange={(event) => {}}
            />
            <br />
            <label>drama</label>
            <TextField
              type="checkbox"
              className="drama"
              onChange={(event) => {}}
            />
            <br />
            <TextField
              type="text"
              className="image"
              label="image"
              onChange={(event) => {}}
              required
              size="small"
              sx={{ mb: "24px" }}
            />
            <br />
            <Button
              type="submit"
              variant="contained"
              className="submitSignUpForm"
            >
              SignUp
            </Button>
          </form>
        )}
      </Stack>
    </Paper>
  );
};
