"use client";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle WhatsApp redirection
  const handleWhatsAppSearch = () => {
    const phoneNumber = "+254 710 434297"; // Replace with your WhatsApp number
    const message = encodeURIComponent(`Hi, I am searching for: ${searchTerm}`);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappURL, "_blank");
  };

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
      onSubmit={(e) => {
        e.preventDefault();
        handleWhatsAppSearch();
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search your item"
        inputProps={{ "aria-label": "search your item" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        color="primary"
        sx={{ p: "10px" }}
        aria-label="search on WhatsApp"
        onClick={handleWhatsAppSearch}
        className="bg-gradient-to-b from-teal-100 to-teal-50"
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
