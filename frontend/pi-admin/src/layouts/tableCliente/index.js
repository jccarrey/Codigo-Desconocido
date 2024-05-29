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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import Icon from "@mui/material/Icon";


// Data
import authorsTableData from "layouts/tableCliente/data/clientsTableData";

function TableCliente() {
  const { columns, rows } = authorsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="error"
                borderRadius="lg"
                coloredShadow="error"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <MDTypography variant="h6" fontWeight="medium" color="white">
                  Tabla Clientes
                </MDTypography>

              </MDBox>
              <MDBox pt={4} pb={3} px={3} sx={{ borderBottom: 1 }} color="light" >
                <MDBox component="form" role="form" >
                  <MDTypography variant="h6" fontWeight="light" color="dark" mb={3}>
                    Campos a rellenar
                  </MDTypography>
                  <form method="POST" action="">
                  <MDBox display="flex" mb={2} justifyContent="space-between" alignItems="center">
                    <MDInput type="text" label="Nombre" required/>
                    <MDInput type="text" label="Rol" required/>
                    <MDInput type="text" label="Descripcion" required/>
                    <MDInput type="text" label="Avatar" required/>
                    <MDInput type="number" min="0" max="10" label="Amigos" required/>
                  </MDBox>
                  <MDButton variant="gradient" color="dark" type="submit">
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    &nbsp;Nuevo cliente
                  </MDButton>
                  </form>
                </MDBox>
              </MDBox>

              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default TableCliente;
