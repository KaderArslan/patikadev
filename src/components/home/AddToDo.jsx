import React from "react";
import {Button, Card, CardActions, CardContent, TextField, makeStyles} 
from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
root: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "25px",
},
createButton: {
  background: "#4543FF",
  color: "#fff",
  borderRadius: "5px",
  padding: "0px 25px",
    
  "&:hover": {
    background: "#0069D9",
    boxShadow: "0px 2px 10px #888888"
  }
},
buttonFontSize: {
  fontSize: "20px",
  color: "#fff"
},
card: {
  boxShadow: "0px 2px 10px #888888",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  width:"400px",
  height:"250px",
  }
}));

export const AddToDo = (props) => {
    const classes = useStyles();
    
//   const resetForm = () => {
//     props.updateDescription("");
//     props.updateTitle("");
//   };
//   const resetFormDescription = () => {
//     props.updateDescription("");
//   };

  const submitForm = event => {
    // event.preventDefault();
    if (props.title !== "" && props.description !== "") {
      let item = { title: props.title, description: props.description };
      if (!props.isEdit) {
        props.updateItems([...props.items].concat(item));
      } else {
        let updatedItemList = [...props.items];
        updatedItemList[props.editIndex].title = item.title;
        updatedItemList[props.editIndex].description = item.description;
        props.updateItems(updatedItemList);
        props.setIsEdit(false);
      }
    //   resetForm();
    }
    else if (props.description !== ""){
        let item = {description: props.description };
      if (props.isEdit) {
        props.updateItems([...props.items].concat(item));
      } else {
        let updatedItemList = [...props.items];
        updatedItemList[props.editIndex].description = item.description;
        props.updateItems(updatedItemList);
        props.setIsEdit(false);
      }
    //   resetFormDescription();
    }
  };

  return (
    
    <div className={classes.root}>
        <h3>
          <p>Add To Do Item</p>
        </h3>
      <form  onSubmit={event => submitForm(event)}>
      <Card className={classes.card}  >
      <CardContent>
          
        <div>
          <TextField
            id="standard-basic"
            label="Title"
            value={props.title}
            onChange={event => props.updateTitle(event.target.value)}
          />
        </div>
        <div >
          <TextField
            id="standard-basic"
            label="Description"
            value={props.description}
            onChange={event => props.updateDescription(event.target.value)}
          />
        </div>
        {!props.isEdit ? (
            <CardActions>
          <Button
            style={{ margin: "1em" }}
            type="submit"
            variant="contained"
            className={[classes.buttonFontSize, classes.createButton]}
          >
            Create
          </Button>
          </CardActions>
        ) : (
            
            <CardActions>
          <Button
            style={{ margin: "1em" }}
            type="submit"
            variant="contained"
            className={[classes.buttonFontSize, classes.createButton]}
          >
            Create List
          </Button>
          </CardActions>
        )}
        </CardContent>
    </Card>
      </form>
    </div>
    
  );
};
