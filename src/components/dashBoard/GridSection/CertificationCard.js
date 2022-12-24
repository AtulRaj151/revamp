import React, { useRef } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Tooltip from "@mui/material/Tooltip";
import { InfoOutlined } from "@mui/icons-material";
import { ButtonExplore } from "../DashBoard.style";
import { DashBoardGridView } from "./DashBoardSectionGrid.style";

const CertificationCard = ({ certificationName, info }) => {
  const positionRef = useRef({
    x: 0,
    y: 0,
  });
  const popperRef = useRef(null);
  const areaRef = useRef(null);
  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };
  return (
    <DashBoardGridView
      item
      xs={13}
      sm={9}
      md={5}
      lg={3}
      data-testid="certification-grid-item"
    >
      <Box
        sx={{
          height: 200,
          backgroundColor: "primary.main",
        }}
      >
        <Box
          sx={{
            width: 1,
            height: 200,
            padding: 3,
          }}
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
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
            {certificationName}
            <Tooltip
              title={info}
              placement="top"
              arrow
              PopperProps={{
                popperRef,
                anchorEl: {
                  getBoundingClientRect: () => {
                    return new DOMRect(
                      positionRef.current.x,
                      areaRef.current.getBoundingClientRect().y,
                      0,
                      0
                    );
                  },
                },
              }}
            >
              <InfoOutlined
                variant="span"
                ref={areaRef}
                onMouseMove={handleMouseMove}
              />
            </Tooltip>
          </Typography>

          <ButtonExplore>
            <Button
              variant="outlined"
              href="#outlined-buttons"
              color="success"
              sx={{
                height: 40,
                border: "2px solid",
                fontSize: 12,
                fontWeight: 700,
                fontSize: {
                  lg: 12,
                  md: 10,
                  sm: 10,
                  xs: 10,
                },
              }}
            >
              Get Certified
            </Button>
          </ButtonExplore>
        </Box>
      </Box>
    </DashBoardGridView>
  );
};

export default CertificationCard;
