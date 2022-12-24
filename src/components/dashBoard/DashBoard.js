import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DashBoardGridSection from "./GridSection/DashBoardSectionGrid";
import Container from "@mui/material/Container";
import { ParentWrapper, ButtonExplore } from "./DashBoard.style";
import { DashBoardGridView } from "./GridSection/DashBoardSectionGrid.style";
import MyPreparationTrack from "./GridSection/MyPreparationTrackCard";
import CertificationCard from "./GridSection/CertificationCard";

const DashBoard = () => {
  return (
    <ParentWrapper>
      <DashBoardGridSection
        header="Your Preparation"
        data-testid="my-preparation-track"
        spacing={4}
      >
        <MyPreparationTrack
          skillHeader="New Skills"
          skillTitle="Add New Skills"
          skillDesc="Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve"
          buttonTitle="Explore"
        />
        <MyPreparationTrack
          skillHeader="New Skills"
          skillTitle="Add New Skills"
          skillDesc="Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve"
          buttonTitle="Explore"
        />
      </DashBoardGridSection>
      <DashBoardGridSection
        header="Certification"
        data-testid="certification-card"
        spacing={2}
      >
        <CertificationCard
          certificationName="Problem Solving(Basic)"
          info="It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching)."
        />
        <CertificationCard
          certificationName="Python(Basic)"
          info="It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes"
        />
      </DashBoardGridSection>
      <DashBoardGridSection
        header="Prepare By Topics"
        data-testid="perpare-by-topics"
        spacing={2}
      ></DashBoardGridSection>
    </ParentWrapper>
  );
};

export default DashBoard;
