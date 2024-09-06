import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const VisaApplicants = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const visaApplicationsSnapshot = await getDocs(
          collection(db, "visaApplications")
        );
        const userDataArray = [];

        // Using Promise.all to handle all the asynchronous requests
        const promises = visaApplicationsSnapshot.docs.map(async (visaDoc) => {
          const personalInfoSnapshot = await getDocs(
            collection(db, "visaApplications", visaDoc.id, "personalInfo")
          );

          personalInfoSnapshot.forEach((personalDoc) => {
            const data = {
              id: visaDoc.id, // Storing the main document ID
              ...personalDoc.data(),
            };
            userDataArray.push(data);
          });
        });

        await Promise.all(promises);

        setUserData(userDataArray);
      } catch (error) {
        console.error("Error fetching documents:", error.message);
      }
    };

    fetchUserData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "adultName",
      headerName: "Adult Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "adultDOBD",
      headerName: "DOB Day",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "adultDOBM",
      headerName: "DOB Month",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "adultDOBY",
      headerName: "DOB Year",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "adultPN",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "adultNat",
      headerName: "Nationality",
      flex: 1,
    },
    {
      field: "childName",
      headerName: "Child Name",
      flex: 1,
    },
    {
      field: "childRel",
      headerName: "Child Relation",
      flex: 1,
    },
    {
      field: "passportImageUrl",
      headerName: "Passport Image URL",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="VISA APPLICANTS" subtitle="Managing the Visa Applicants" />
      <Box
        m="40px 0 0 0"
        height="67vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.redAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.yellowAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.yellowAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.redAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={userData} columns={columns} />
      </Box>
    </Box>
  );
};

export default VisaApplicants;
