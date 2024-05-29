/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from "react";


// @mui material components
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

function Notifications() {
  const [errorSB, setErrorSB] = useState(false);

  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);


  return (
    <>
      <MDButton variant="text" color="error" onClick={openErrorSB}>
        <Icon>delete</Icon>&nbsp;delete
      </MDButton>
      <MDSnackbar
        color="error"
        icon="warning"
        title="Eliminar reserva"
        content="¿Seguro que quieres eliminar la reserva?"
        open={errorSB}
        onClose={closeErrorSB}
        close={closeErrorSB}
        bgWhite
      />
    </>
  );
}



export default function data() {

  const Author = ({ name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );


  return {
    columns: [
      { Header: "#id", accessor: "id", align: "left" },
      { Header: "id_user", accessor: "id_user", align: "left" },
      { Header: "id_escaperoom", accessor: "id_escaperoom", align: "center" },
      { Header: "fecha", accessor: "fecha", align: "center" },
      { Header: "horas", accessor: "horas", align: "center" },
      { Header: "acciones", accessor: "botones", align: "center" },
    ],

    rows: [
      {
        id: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            id
          </MDTypography>
        ),
        id_user: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            id_user
          </MDTypography>
        ), id_escaperoom: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            id_escaperoom
          </MDTypography>
        ),
        fecha: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            fecha
          </MDTypography>
        ),
        horas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            horas
          </MDTypography>
        ),
        botones: (
          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color="info">
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
            </MDBox>
            <Notifications></Notifications>
          </MDBox>
        ),
      },
    ],
  };
}
