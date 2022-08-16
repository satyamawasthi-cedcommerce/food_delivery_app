// importing and creating the required output through MUI
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Drawer } from "@mui/material";
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Main(props) {
  // this variable helps to open and close the drawer menu
  const [isopen, setisopen] = useState(false);
  // add to cart functionality
  const addtoCart = (event, item) => {
    var pid = item.id;
    var cartProduct = props.cartArr.find((item) => item.id === pid);
    if (cartProduct) {
      props.cartArr.filter((item) => {
        if (item.id === pid) {
          item.quantity = item.quantity + 1;
          return item;
        }
        return item;
      });
    } else {
      props.setcartArr([...props.cartArr, { ...item, quantity: 1 }]);
    }
  };
  const SwipeableTemporaryDrawer = () => {
    setisopen(true);
  };
  //emptycart function
  const emptyCart = () => {
    alert("Are you sure you want to empty your cart?");
    props.setcartArr([]);
  };
  // this function will get called when remove button is pressed
  const removefromCart = (event, id) => {
    alert("Are you sure you want to delete item from cart?");
    props.setcartArr(props.cartArr.filter((cartItem) => cartItem.id !== id));
  };
  // this function affirms the user with an alert message of products been added to the cart
  const success = () =>{
    alert("your Order is successfully placed with us.");
    props.setcartArr([]);
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16} style={{ padding: "1% 5%" }}>
          {props.menu.map((item, index) => (
            <>
              <Grid item xs={8}>
                <div>
                  <div>
                    <Item
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "2%",
                      }}
                    >
                      <div style={{ width: "50%" }}>
                        <h3 style={{ textAlign: "left" }}>{item.name}</h3>
                        <h5 style={{ textAlign: "left" }}>{item.category}</h5>
                        <h4 style={{ textAlign: "left" }}>
                          &#8377; {item.price}
                        </h4>
                        <button
                          id="cartBtn"
                          onClick={(event) => addtoCart(event, item)}
                          style={{
                            border: "2px solid green",
                            borderRadius: "7px",
                            padding: "2%",
                            fontSize: "medium",
                            backgroundColor: "white",
                            color: "green",
                            marginTop: "10%",
                          }}
                        >
                          Add to cart
                        </button>
                      </div>

                      <img
                        src={item.image}
                        alt="..."
                        style={{ width: "25%" }}
                      />
                    </Item>
                  </div>
                  <div></div>
                </div>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
      <Drawer anchor="bottom" open={isopen} onClose={() => setisopen(false)}>
        <Box p={2}>
          <table>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>price</th>
              <th>qauntity</th>
              <th>Action</th>
              <th>Total</th>
            </tr>
            <tbody>
              {props.cartArr.map((item) => (
                <>
                  <tr>
                    <td>{item.id}</td>
                    <td><img src={item.image} alt="..." style={{width:"10%"}}/></td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <DeleteForeverIcon
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={(event) => removefromCart(event, item.id)}
                      />
                    </td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </Box>
      </Drawer>
      <div id="bottomNav">
        <KeyboardDoubleArrowUpIcon onClick={SwipeableTemporaryDrawer} />
        <h3>Your Orders:({props.cartArr.length})</h3>
        <button
          style={{
            backgroundColor: "#B33F40",
            padding: "1%",
            border: "none",
            borderRadius: "5%",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={success}
        >
          Continue
        </button>
        <button
          style={{
            backgroundColor: "#B33F40",
            padding: "1%",
            border: "none",
            borderRadius: "5%",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={emptyCart}
        >
          Empty Cart
        </button>
      </div>
    </>
  );
}
