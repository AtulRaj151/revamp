import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ButtonExplore } from "../DashBoard.style";
import DashBoardGridSection from "./DashBoardSectionGrid";
import { DashBoardGridView } from "./DashBoardSectionGrid.style";

const MyPreparationTrack = ({
  skillHeader,
  skillTitle,
  skillDesc,
  buttonTitle,
}) => {
  return (
    <DashBoardGridView item xs={13} sm={9} md={5} lg={4}>
      <Box
        sx={{
          width: 1,
          height: 300,
          backgroundColor: "primary.main",
        }}
      >
        <Box
          sx={{
            width: 1,
            height: 250,
            padding: 3,
          }}
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography
            variant="h2"
            sx={{
              marginBottom: 2,
              color: "#738f93",
              fontWeight: 400,
              lineHeight: 1.4,
              fontSize: 12,
            }}
          >
            {skillHeader}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              marginBottom: 2,
              fontSize: 26,
              lineHeight: 1.2,
              fontWeight: 700,
              fontSize: {
                lg: 26,
                md: 23,
                sm: 20,
                xs: 16,
              },
            }}
          >
            {skillTitle}
          </Typography>
          <Typography
            sx={{
              lineHeight: 1.5,
              letterSpacing: 0,
              marginBottom: 2,
              width: 1,
              fontSize: {
                lg: 13,
                md: 12,
                sm: 11,
                xs: 10,
              },
            }}
          >
            {skillDesc}
          </Typography>
          <ButtonExplore>
            <Button
              variant="outlined"
              href="#outlined-buttons"
              color="success"
              sx={{
                height: 1,
                border: "2px solid",
                fontSize: 16,
                fontWeight: 800,
                fontSize: {
                  lg: 16,
                  md: 12,
                  sm: 11,
                  xs: 10,
                },
              }}
            >
              {buttonTitle}
            </Button>
          </ButtonExplore>
        </Box>
      </Box>
    </DashBoardGridView>
  );
};

export default MyPreparationTrack;
