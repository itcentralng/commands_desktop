import { Box, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
// import Transition from "../components/transition";
import DetailsHeader from "../components/DetailsHeader";
import { useParams } from "react-router-dom";
import { centralData } from '../components/data';
import React from "react";
import BackButton from "../components/BackButton";
import { motion } from "framer-motion";
const AOR = () => {
  const { id } = useParams();

  const selectedItem = centralData[0]?.aor.find((item) => item.id === Number(id));

  if (!selectedItem) {
    return (
      <Box
        sx={{
          marginLeft: "6em",
          display: "flex",
          position: "relative",
        }}
      >
        <SideBar></SideBar>
        <DetailsHeader></DetailsHeader>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, ease: "easeIn" }}>
          <BackButton />
        </motion.div>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", width: "90%" }}>
        <SideBar>
          <DetailsHeader>
            <motion.div
              style={{
                width: "80%",
                marginLeft: "4.5em",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  fontSize: "4rem",
                  marginBottom: ".2em",
                  fontFamily: "Perpetua Light",
                }}
              >
                {selectedItem.header}
              </Typography>
              <div style={{  display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20}} >
             
                 {/* <img src={selectedItem.map1} alt="Map" style={{ width: "auto", height: "400px"}} />
                 <img src={selectedItem.map2} alt="Map" style={{ width: "auto", height: "400px"}} />
                 <img src={selectedItem.map3} alt="Map" style={{ width: "auto", height: "400px"}} />
                 <img src={selectedItem.map4} alt="Map" style={{ width: "auto", height: "400px"}} />
                 <img src={selectedItem.map5} alt="Map" style={{ width: "auto", height: "400px"}} /> */}

                 {selectedItem.images.map(imageItem => (
                      <div key={imageItem.id} style={{ padding: 20, display: "flex", justifyContent: "center"}}>
                        <img src={imageItem.image} alt={`Image ${imageItem.id}`} style={{ width: "auto", height: "500px" }} />
                      </div>
                    ))}
                     
              </div>
              <Box
                sx={{
                  width: "97%",
                  height: "50vh",
                  overflow: "auto",
                  scrollbarWidth: "thin", // For Firefox
                  scrollbarColor: "transparent transparent", // For Firefox
                  WebkitOverflowScrolling: "touch",
                }}
              >
                <style>
                  {`
                    /* Hide scrollbar for WebKit browsers (Chrome, Safari) */
                    ::-webkit-scrollbar {
                      width: 0.2em;
                    }

                    ::-webkit-scrollbar-thumb {
                      background-color: transparent;
                    }

                    /* Optional: Add some styles for the scrollbar track */
                    ::-webkit-scrollbar-track {
                      // background-color: #f1f1f1;
                    }
                `}
                </style>
                <Typography
                  key={selectedItem.id}
                  variant="body2"
                  component={"div"}
                  sx={{
                    color: "#fff",
                    fontSize: "1.5rem",
                    marginBottom: "1.2em",
                    width: "100%",
                    fontFamily: "Manrope",
                    lineHeight: "1.8",
                    paddingBottom: 20
                  }}
                >
                  {selectedItem.text.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <p style={{ display: "block", padding: ".2em 0" }}></p>
                    </React.Fragment>
                  ))}
                </Typography>
              </Box>
            </motion.div>
          </DetailsHeader>
        </SideBar>
      </Box>
      <Box>
        <BackButton />
      </Box>
    </Box>
  );
};

export default AOR;
