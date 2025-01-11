import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        borderRadius: 50,
        flexGrow: 1,
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search your item"
        inputProps={{ "aria-label": "search google maps" }}
      />
      {/* <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      </IconButton> */}
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        color="primary"
        sx={{ p: "10px", color: "" }}
        aria-label="directions"
        className="bg-gradient-to-b from-teal-100 to-teal-50"
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
