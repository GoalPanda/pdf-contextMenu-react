import React from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

const datatableData = {
  "current_page_number": 1,
  "num_items_per_page": 10,
  "items": [
      {
          "id": 1,
          "siren": 5420120,
          "nb_bilan": 3,
          "nb_acte": 21,
          "last_acte": "2018-07-18T00:00:00+02:00",
          "last_bilan": "2018-12-31T00:00:00+01:00",
          "last_acte_depose": "2020-04-02T00:00:00+02:00",
          "last_bilan_depose": "-0001-11-30T00:00:00+00:53",
          "level": 1,
          "treated": false,
          "created_at": "2020-02-26T18:58:44+01:00",
          "updated_at": "2020-05-14T16:19:15+02:00"
      },
      {
          "id": 2,
          "siren": 5450119,
          "nb_bilan": 4,
          "nb_acte": 8,
          "last_acte": "2013-12-23T00:00:00+01:00",
          "last_bilan": "2018-12-31T00:00:00+01:00",
          "last_acte_depose": "2020-04-09T00:00:00+02:00",
          "last_bilan_depose": "-0001-11-30T00:00:00+00:53",
          "level": 0,
          "treated": false,
          "created_at": "2020-02-26T18:58:44+01:00",
          "updated_at": "2020-04-17T17:37:31+02:00"
      },
      {
          "id": 3,
          "siren": 5541552,
          "nb_bilan": 2,
          "nb_acte": 4,
          "last_acte": "2020-02-19T00:00:00+01:00",
          "last_bilan": "2018-04-30T00:00:00+02:00",
          "last_acte_depose": "-0001-11-30T00:00:00+00:53",
          "last_bilan_depose": "-0001-11-30T00:00:00+00:53",
          "level": 0,
          "treated": false,
          "created_at": "2020-02-26T18:58:44+01:00",
          "updated_at": "2020-04-21T10:25:05+02:00"
      },
      {
          "id": 4,
          "siren": 5650031,
          "nb_bilan": 3,
          "nb_acte": 3,
          "last_acte": "2011-09-30T00:00:00+02:00",
          "last_bilan": "2018-09-30T00:00:00+02:00",
          "last_acte_depose": "-0001-11-30T00:00:00+00:53",
          "last_bilan_depose": "-0001-11-30T00:00:00+00:53",
          "level": 0,
          "treated": true,
          "created_at": "2020-02-26T18:58:44+01:00",
          "updated_at": "2020-04-17T07:31:34+02:00"
      },
      {
          "id": 5,
          "siren": 5650148,
          "nb_bilan": 2,
          "nb_acte": 35,
          "last_acte": "2019-09-05T00:00:00+02:00",
          "last_bilan": "2018-12-31T00:00:00+01:00",
          "last_acte_depose": "-0001-11-30T00:00:00+00:53",
          "last_bilan_depose": "-0001-11-30T00:00:00+00:53",
          "level": 0,
          "treated": false,
          "created_at": "2020-02-26T18:58:44+01:00",
          "updated_at": "2020-04-17T07:31:34+02:00"
      },
      {
          "id": 6,
          "siren": 5650189,
          "nb_bilan": 1,
          "nb_acte": 15,
          "last_acte": "2017-09-04T00:00:00+02:00",
          "last_bilan": "2016-12-31T00:00:00+01:00",
          "last_acte_depose": "-0001-11-30T00:00:00+00:53",
          "last_bilan_depose": "-0001-11-30T00:00:00+00:53",
          "level": 0,
          "treated": false,
          "created_at": "2020-02-26T18:58:44+01:00",
          "updated_at": "2020-04-21T10:25:03+02:00"
      },
      {
          "id": 7,
          "siren": 5750377,
          "nb_bilan": 3,
          "nb_acte": 9,
          "last_acte": "2016-02-24T00:00:00+01:00",
          "last_bilan": "2018-12-31T00:00:00+01:00",
          "last_acte_depose": "-0001-11-30T00:00:00+00:53",
          "last_bilan_depose": "-0001-11-30T00:00:00+00:53",
          "level": 0,
          "treated": false,
          "created_at": "2020-02-26T18:58:44+01:00",
          "updated_at": "2020-04-17T07:31:34+02:00"
      },
      {
          "id": 8,
          "siren": 5750385,
          "nb_bilan": 2,
          "nb_acte": 15,
          "last_acte": "2011-12-20T00:00:00+01:00",
          "last_bilan": "2018-12-31T00:00:00+01:00",
          "last_acte_depose": "-0001-11-30T00:00:00+00:53",
          "last_bilan_depose": "-0001-11-30T00:00:00+00:53",
          "level": 0,
          "treated": false,
          "created_at": "2020-02-26T18:58:44+01:00",
          "updated_at": "2020-04-17T07:31:34+02:00"
      },
      {
          "id": 9,
          "siren": 5750583,
          "nb_bilan": 5,
          "nb_acte": 8,
          "last_acte": "2010-03-09T00:00:00+01:00",
          "last_bilan": "2018-12-31T00:00:00+01:00",
          "last_acte_depose": "-0001-11-30T00:00:00+00:53",
          "last_bilan_depose": "-0001-11-30T00:00:00+00:53",
          "level": 0,
          "treated": false,
          "created_at": "2020-02-26T18:58:44+01:00",
          "updated_at": "2020-04-17T07:31:34+02:00"
      },
      {
          "id": 10,
          "siren": 5781133,
          "nb_bilan": 0,
          "nb_acte": 0,
          "last_acte": "2019-08-20T00:00:00+02:00",
          "last_bilan": "2018-12-31T00:00:00+01:00",
          "last_acte_depose": "-0001-11-30T00:00:00+00:53",
          "last_bilan_depose": "-0001-11-30T00:00:00+00:53",
          "level": 0,
          "treated": false,
          "created_at": "2020-02-26T18:58:44+01:00",
          "updated_at": "2020-04-17T07:31:34+02:00"
      }
  ],
  "total_count": 50,
  "paginator_options": {
      "pageParameterName": "page",
      "sortFieldParameterName": "sort",
      "sortDirectionParameterName": "direction",
      "filterFieldParameterName": "filterField",
      "filterValueParameterName": "filterValue",
      "distinct": true
  },
  "custom_parameters": {
      "sorted": true
  },
  "route": "changement_index",
  "params": [],
  "page_range": 5,
  "template": "@KnpPaginator/Pagination/sliding.html.twig",
  "sortable_template": "@KnpPaginator/Pagination/sortable_link.html.twig",
  "filtration_template": "@KnpPaginator/Pagination/filtration.html.twig"
};

const datatableColums = [
  { 
    Label: "id",
    name: "id",
  },
  {
    Label: "siren",
    name: "Siren"
  },
  {
    Label: "nb_bilan",
    name: "Nombre Bilan",
  },
  {
    Label: "nb_acte",
    name: "Nombre Actre"
  },
  {
    Label: "last_acte",
    name: "Last acte"
  },
  { 
    Label: "last_bilan",
    name: "last bilan"
  },
  {
    Label: "last_acte_depose",
    name: "Last acte depose"
  },
  {
    Label: "last_bilan_depose",
    name: "Last bilan depose"
  },
  {
    Label: "level",
    name: "Level"
  },
  {
    Label: "treated",
    name: "Treated"
  },
  {
    Label: "created_at",
    name: "Date de creation"
  },
  {
    Label: "updated_at",
    name: "Date de mise a jour"
  }];


export default function Chargement() {
  return (
    <>
      <PageTitle title="Chargement" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Employee List"
            data={datatableData.items.map( (item) => {
              return Object.values(item);
            })}
            columns={datatableColums}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
