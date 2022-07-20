import React from "react";
import "../screens/Card.css";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import Button from "@mui/material/Button";
const Card = () => {
  var items = [
    {
      nomorder: "salade cesar",
      quantity: "5",
      status: "En cours",
      time: "11:25",
      ordertype: "Livraison",
      ordernumber: "324",
      server: "server1",
      note: "extra fromage",
    },
    {
      nomorder: "pizza vegeterian",
      quantity: "9",
      status: "prete",
      time: "12:05",
      ordertype: "Sur place",
      ordernumber: "325",
      server: "server2",
      note: "spicy",
    },
    {
      nomorder: "burger cheese",
      quantity: "1",
      status: "en cours",
      time: "9:25",
      ordertype: "Emporter",
      ordernumber: "326",
      server: "server3",
      note: "pas de olive",
    },
    {
      nomorder: "burger cheese",
      quantity: "2",
      status: "en cours",
      time: "9:25",
      ordertype: "Emporter",
      ordernumber: "326",
      server: "server3",
      note: "alergie tomate",
    },
    {
      nomorder: "burger cheese",
      quantity: "2",
      status: "en cours",
      time: "9:25",
      ordertype: "Emporter",
      ordernumber: "326",
      server: "server3",
      note: "alergie tomate",
    }, {
      nomorder: "burger cheese",
      quantity: "2",
      status: "en cours",
      time: "9:25",
      ordertype: "Emporter",
      ordernumber: "326",
      server: "server3",
      note: "alergie tomate",
    },
  ];
  return (
    <div className="Card-containers">
      {items.map((item, key) => (
        <div className="Card">
          <div
            style={{
              backgroundColor: "#f4c8bb",
              height: "17%",
              borderRadius: "25px 25px 0 0",
              padding: "4px",
              textAlign: "center",
            }}
          >
            <b style={{ fontSize: "22px", color: "#AF1F1E" }}>{item.time}</b>
            <div className="order-head">
              <div className="order-type">
                <DeliveryDiningIcon />
                {" "}
                <b>{item.ordertype}</b>
              </div>
              <b> #{item.ordernumber}</b>
              <b>{item.server}</b>
            </div>
          </div>
          <div className="ordertext">
            {" "}
            <RoomServiceIcon />
            Order
          </div>
          <div className="orderlist">
            <ul>
              <li>
                {item.quantity} {item.nomorder} <br />
                <span> {item.note} </span>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="butttoncheck">
            <Button variant="contained" disableElevation color="success">
              Marque comme pret
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
