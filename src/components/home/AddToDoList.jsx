import React from "react";
import {ListItem,ListItemText,Checkbox} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

// const useStyles = makeStyles((theme) => ({
// root: {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   marginTop: "25px",
// },
// icon: {
//     alignItems: "center"
// }
// }));

export const AddToDoList = (props) => {
  // const classes = useStyles();

  const removeItem = index => {
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
  <div >
    <ul>
      {props.items.length ? (
        props.items.map((item, index) => {
          return (  
              <ListItem divider={true}>
                <ListItemText
                  style={{ marginRight: "1em" }}
                  secondary={item.description} 
                />
                <Checkbox color="primary" />
                <AddIcon onClick={() => editItem(index)} />
                <DeleteIcon  onClick={() => removeItem(index)} />
              </ListItem>
          );
        })
      ) : (
        <span>No Items Added Yet!</span>
      )}
    </ul>
  </div>
);
};
