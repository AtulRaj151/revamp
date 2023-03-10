import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  Wrapper,
  BreadCrumbsContainer,
  BreadCrumbsSubHeading,
} from "./SubHeader.style";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { PAGES_MAPPING } from "../../helper/routes";
const SubHeader = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadCrumbs] = useState({});
  useEffect(() => {
    if (location.pathname !== "/") {
      const path = PAGES_MAPPING.filter(
        (item) => item.path === location.pathname
      );
      if (!path.length) {
        return;
      }
      setBreadCrumbs(path[0]);
    } else {
      setBreadCrumbs(PAGES_MAPPING[0]);
    }
  }, [location]);
  return (
    <Wrapper data-testid="subHeader-container">
      <Box
        sx={({ theme }) => ({
          width: 1,
          height: 100,
          boxShadow: "0.1px 1px 4px 0 #e7eeef",
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.7, 0.8, 1],
          },
        })}
      >
        <BreadCrumbsContainer>
          <Typography color="text.breadcrumb" sx={{ fontSize: 13 }}>
            {breadcrumbs.name}
          </Typography>
          <BreadCrumbsSubHeading>{breadcrumbs.desc}</BreadCrumbsSubHeading>
        </BreadCrumbsContainer>
      </Box>
    </Wrapper>
  );
};

export default SubHeader;
