import React from "react";
import {List,ListItem,ListItemText,Checkbox,Card,CardContent,makeStyles} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

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
//   alignItems: "start",
  display: "flex",
  flexDirection: "column",
  width:"800px",
  height:"150px",
  marginBottom: "5px"
},
icon: {
    alignItems: "center"
}
}));


export const ToDoList = (props) => {
    const classes = useStyles();

    const removeItem = index => {
    let taskList = [...props.items];
    taskList.splice(index, 1);
    props.updateItems(taskList);
  };
  const removeList = index => {
    let taskList = [...props.items];
    taskList.splice(index, 1);
    props.updateItems(taskList);
  };

    const editItem = index => {
    const item = props.items;
    props.updateDescription(item[index].description);
    props.setIsEdit(true);
    props.setEditIndex(index);
  };

  return (
    <div className={classes.root}>
        <h3>
          <p>To Do List</p>
        </h3>
      <ul>
        {props.items.length ? (
          props.items.map((item, index) => {
            return (
            <Card className={classes.card} >
                <div align="right">

                {/* <EditIcon onClick={() => editItem(index)} /> */}
                <DeleteIcon   onClick={() => removeItem(index)} />
                </div>
              <CardContent>
              <List
                component="nav"
                key={index}
                aria-label="main mailbox folders"
              >
                <ListItem divider={true}>
                  <ListItemText
                    style={{ marginRight: "1em" }}
                    primary={item.title}
                    secondary={item.description}

                  />
                  <Checkbox color="primary" />
                  <AddIcon onClick={() => editItem(index)} />
                  <DeleteIcon  onClick={() => removeList(index)} />
                </ListItem>
              </List>
              </CardContent>
            </Card>
            );
          })
        ) : (
          <span>No Items Added Yet!</span>
        )}
      </ul>
    </div>
  );
};
